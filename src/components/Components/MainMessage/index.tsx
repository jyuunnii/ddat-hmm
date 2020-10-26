import React from 'react';
import styled from 'styled-components';
import { UserProfile } from '../../../utils';
import MainMessageLove from '../MainMessageLove';
import MainMessageThanks from '../MainMessageThanks';


const MMCContainer = styled.div`
    display: flex;
    width: 328px;
    height: 100%;
    overflow-y: hidden;
    padding-left: 60px;
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
    user: UserProfile;
}

const messageType = ['love', 'thanks'];

const MainMessage = ({user}: MainMessageProps) => {
    return(
        <MMCContainer>
            {messageType.map((type) => {
                switch(type){
                    case 'love':
                        return <MMCWrapper key={type}><MMCBox><MainMessageLove receiver={user}/></MMCBox></MMCWrapper>
                    
                    case 'thanks':
                        return <MMCWrapper key={type}><MMCBox><MainMessageThanks receiver={user}/></MMCBox></MMCWrapper>
                }
                return <div></div> ;
            })}
        </MMCContainer>
    )
}

export default MainMessage;