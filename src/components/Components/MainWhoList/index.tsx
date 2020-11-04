import React from 'react';
import styled from 'styled-components';
import { Friends } from '../../../utils';
import './index.css';


const MWLContainer = styled.div`
    display: flex;
    width: 328px;
    overflow-y: hidden;
    padding-left: 32px;
`;

const MWLCWrapper = styled.div`
    display: flex;
    min-width: 50px;
    min-height: 90px;
    padding-right: 24px;
    flex-direction: column;
    justify-content: center;
`;


type MainWhoListProps = {
    friendsList: Friends | undefined;
}

const MainWhoList = ({friendsList}: MainWhoListProps) => {
    if(! Array.isArray(friendsList?.friends) || !friendsList?.friends.length){
        return(
          <MWLContainer>
             <div>친구를 추가해주세요.</div> 
          </MWLContainer>
        )
    }
    return(
        <MWLContainer>
        {friendsList?.friends.map((friend, index) => {
            return(
            <MWLCWrapper key={index}>
                <div className="main-friend-image"></div>
                <div className="main-friend-name">{friend}</div>
            </MWLCWrapper>
            )
        })}
        </MWLContainer>
    )
}

export default MainWhoList;