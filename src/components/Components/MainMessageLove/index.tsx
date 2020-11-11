import React, { useState } from 'react';
import { initialBackground, initialProfile, UserPublic } from '../../../utils';
import { sendMessage } from '../../api';
import './index.css';

type MainMessageLoveProps = {
    userToken: {id: number, token: string}
    receiver: UserPublic;
}

const initialMessage = "사랑해";

const MainMessageLove = ({userToken, receiver}: MainMessageLoveProps) => {
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
        if(userToken.id > 0 && receiver.id > 0){
            await sendMessage(userToken.id, userToken.token, receiver.id, message.content);
        }else{
            window.confirm("친구목록에서 메세지를 받을 사람을 선택해주세요.");
        }
    };

    return(
        <div>
            <div className="background-image-box">
                <img src={receiver.profileImageUri === initialProfile? initialBackground : receiver.profileImageUri} alt="receiver-img"/>
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