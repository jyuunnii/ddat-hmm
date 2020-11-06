import React, { useState } from 'react';
import { UserPublic } from '../../../utils';
import './index.css';


type MainMessageLoveProps = {
    receiver: UserPublic;
}

const MainMessageThanks = ({receiver}: MainMessageLoveProps) => {
    const [message, setMessage] = useState({
        receiverName: receiver.name,
        msg: "고마워",
        count: 1
      });

    const { msg, count } = message;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMessage({
          ...message,
          [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage({
            receiverName: receiver.name,
            msg: msg,
            count: count+1
        }); 
    };
    
    return(
        <div>
            <div className="background-image-box">
                <img src={receiver.profileImageUri === null? "/images/person.png":"https://"+receiver.profileImageUri} 
                className="receiver-img" alt="receiver-img"/> 
            </div>
            <div className="send-count" style={{visibility: count === 1? "hidden" : "visible"}}>{count}</div>
            <form onSubmit={handleSubmit}>
                <div className="thanks-title-box">
                <div className="thanks-message"><input type="text" placeholder="" name="msg" value={msg} onChange={onChange}/></div>
                <div><span className="material-icons-round edit-icon">edit</span></div>
                </div>
                <div className="send-round-box">
                    <button type="submit"><span className="material-icons-round send-icon">send</span></button> 
                </div>
            </form>
        </div>
    )
}

export default MainMessageThanks;