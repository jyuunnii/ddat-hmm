import React, { useState } from 'react';
import { User } from '../../../utils';
import './index.css';


type MainMessageLoveProps = {
    receiver: User;
}

const MainMessageThanks = ({receiver}: MainMessageLoveProps) => {
    const [message, setMessage] = useState({
        //receiver_name: receiver.name,
        msg: "고마워",
        count: 1
      });

    const { /*receiver_name,*/ msg, count } = message;

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
            //receiver_name: receiver.name,
            msg: msg,
            count: count+1
        }); 
    };
    
    return(
        <div>
            <div className="background-image-box">
                {/* <img src={"https://"+receiver.imageUri} alt="receiver-img" style={{width: "240px", height:"240px"}/> */}
                <img src="/images/person.png" className="receiver-img" alt="test-img" style={{width: "240px", height:"240px"}}/> 
            </div>
            <div className="send-count" style={{visibility: count === 1? "hidden" : "visible"}}>{count}</div>
            <form onSubmit={handleSubmit}>
                <div className="thanks-title-box">
                <div className="thanks-message"><input type="text" placeholder="사랑해" name="msg" value={msg} onChange={onChange}/></div>
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