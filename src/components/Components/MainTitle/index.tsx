import React, { useEffect, useState } from 'react';
import { UserProfile } from '../../../utils';
import './index.css';

type MainTitleProps = {
    user: UserProfile;
}

const MainTitle = ({user}: MainTitleProps) => {
    const [welcomeMessage, setWelcomeMessage] = useState<string>();

    useEffect(() => {
        let time= new Date().getHours();
        switch(true){
            case (5 <= time && time < 12):
               setWelcomeMessage("Good morning");
               break;
            
            case (12 <= time && time < 18):
                setWelcomeMessage("Good afternoon");
                break;
            
            case (18 <= time || time < 5):
                setWelcomeMessage("Good evening");
               break;
        }
    },[])

    return(
        <div>
            <div className="main-title">{welcomeMessage}, {user.name}</div>
            <div className="main-subtitle">Quick touch &amp; express your love</div>
        </div>
    )
}

export default MainTitle;