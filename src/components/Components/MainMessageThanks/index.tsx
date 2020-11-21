import React, { useState } from 'react';
import { initialProfile, initialBackground } from '../../../utils/Const';
import { UserPublic } from '../../../utils/Type';
import { sendMessage } from '../../api';
import './index.css';


type MainMessageLoveProps = {
    userToken: {id: number, token: string}
    receiver: UserPublic;
}

const initialMessage = "고마워";

const MainMessageThanks = ({userToken, receiver}: MainMessageLoveProps) => {
    const [message, setMessage] = useState({
        targetUserId: receiver.id,
        content: initialMessage
      });

    const { content } = message;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMessage({
          ...message,
          [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await sendMessage(userToken.id, userToken.token, receiver.id, message.content);
        setMessage({
            targetUserId: receiver.id,
            content: message.content
        }); 
    };
    
    return(
        <div>
            <div className="background-image-box">
                <img src={receiver.profileImageUri === initialProfile? initialBackground : receiver.profileImageUri} 
                className="receiver-img" alt="receiver-img"/> 
            </div>
            <form onSubmit={handleSubmit}>
                <div className="thanks-title-box">
                <div className="thanks-message"><input type="text" name="content" value={content} onChange={onChange}/></div>
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