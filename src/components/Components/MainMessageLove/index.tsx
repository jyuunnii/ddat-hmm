import React, { useState } from 'react';
import { initialProfile, initialBackground } from '../../../utils/Const';
import { UserPublic } from '../../../utils/Type';
import { sendMessage } from '../../api';
import './index.css';

type MainMessageLoveProps = {
    userToken: {id: number, token: string}
    receiver: UserPublic;
    setClicked :(type: boolean) => void;
}

const initialMessage = "사랑해";



const MainMessageLove = ({userToken, receiver, setClicked}: MainMessageLoveProps) => {
    const [message, setMessage] = useState({
        targetUserId: receiver.id,
        content: initialMessage
      });
    
    const [sentCount, setSentCount] = useState<number>(1);

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
            await setSentCount(sentCount+1);
            if(sentCount > 20){
                alert("최대 스무개의 메세지를 보낼 수 있어요 :)")
                return;
            }
            await sendMessage(userToken.id, userToken.token, receiver.id, message.content);
            setClicked(true);
            setTimeout(() => {
                setClicked(false);
              }, 1000);
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
                <div><i className="material-icons-round edit-icon">edit</i></div>
                </div>
                <div className="send-round-box">
                    <button type="submit"><i className="material-icons-round send-icon">send</i></button> 
                </div>
            </form>
        </div>
    )
}

export default MainMessageLove;