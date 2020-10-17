import React from 'react';
import { User } from '../../../utils';
import './index.css';

type MainTitleProps = {
    user: User;
}

const MainTitle = ({user}: MainTitleProps) => {
    return(
        <div>
            <div className="main-title">Good morning, {user.name}</div>
            <div className="main-subtitle">Quick touch &amp; express your love</div>
        </div>
    )
}

export default MainTitle;