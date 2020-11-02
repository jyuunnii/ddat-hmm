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
            <h4 className="main-title">{welcomeMessage}, {user.name}</h4>
            <h6 className="main-subtitle">Quick touch &amp; express your love</h6>
        </div>
    )
}

export default MainTitle;