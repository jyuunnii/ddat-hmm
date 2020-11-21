import React, { useState } from 'react';
import styled from 'styled-components';
import { UserPublic } from '../../../utils/Type';
import MainMessageLove from '../MainMessageLove';
import MainMessageThanks from '../MainMessageThanks';
import './index.css';


const MMCContainer = styled.div`
    display: flex;
    width: 328px;
    height: 100%;
    overflow-y: hidden;
    padding-left: 60px;
    margin: 0 auto;
`;

const MMCWrapper = styled.div`
    padding-right: 60px;
`;

const MMCBox = styled.div`
    width: 240px;
    height: 240px;
    position: relative;
`;

type MainMessageProps = {
    receiver: UserPublic;
    userToken: {id: number, token: string};
}

const messageType = ['love', 'thanks'];

const MainMessage = ({userToken, receiver}: MainMessageProps) => {
    const [isClicked, setClicked] = useState<boolean>(false);
    return(
        <MMCContainer>
            {messageType.map((type) => {
                switch(type){
                    case 'love':
                        return <MMCWrapper key={type}><MMCBox><MainMessageLove userToken={userToken} receiver={receiver} setClicked={setClicked}/></MMCBox></MMCWrapper>
                    
                    case 'thanks':
                        return <MMCWrapper key={type}><MMCBox><MainMessageThanks userToken={userToken} receiver={receiver} setClicked={setClicked}/></MMCBox></MMCWrapper>
                }
                return <div></div> ;
            })}

            <span className="sent-alert" style={{
                display: isClicked? "block" : "none",
                position: "fixed",
                top: isClicked? "52px" : "-10px"
            }}>
                메세지를 전송했습니다.
            </span>
        </MMCContainer>
    )
}

export default MainMessage;