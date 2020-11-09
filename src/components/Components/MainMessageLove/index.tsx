import React, { useState } from 'react';
import { initialBackground, UserPublic } from '../../../utils';
import { sendMessage } from '../../api';
import './index.css';

type MainMessageLoveProps = {
    user: {id: number, token: string}
    receiver: UserPublic;
}

const initialMessage = "사랑해";

const MainMessageLove = ({user, receiver}: MainMessageLoveProps) => {
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
        if(user.id > 0 && receiver.id > 0){
            await sendMessage(user.id, user.token, message.targetUserId, message.content);
        }else{
            window.confirm("Please click a receiver on your friend list");
        }
        setMessage({
            targetUserId: receiver.id,
            content: message.content
        }); 
    };

    return(
        <div>
            <div className="background-image-box">
                <img src={receiver.profileImageUri === null? initialBackground : receiver.profileImageUri} alt="receiver-img"/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="love-title-box">
                <div className="love-message"><input type="text" name="content" value={content} onChange={onChange}/></div>
                <div><span className="material-icons-round edit-icon">edit</span></div>
                </div>
                <div className="send-round-box">
                    <button type="submit"><span className="material-icons-round send-icon">send</span></button> 
                </div>
            </form>
        </div>
    )
}

export default MainMessageLove;