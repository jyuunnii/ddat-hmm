import React from 'react';
import styled from 'styled-components';
import { UserPublic } from '../../../utils';
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
    friendsList: {follower: UserPublic[], followed: UserPublic[]};
}

const MainWhoList = ({friendsList}: MainWhoListProps) => {
    if(! Array.isArray(friendsList.follower) || !friendsList.follower.length){
        return(
          <MWLContainer>
             <div>친구를 추가해주세요.</div> 
          </MWLContainer>
        )
    }
    return(
        <MWLContainer>
        {friendsList.follower.map((friend) => {
            return(
            <MWLCWrapper key={friend.id}>
                <div className="main-friend-image"></div>
                <div className="main-friend-name">{friend.name}</div>
            </MWLCWrapper>
            )
        })}
        </MWLContainer>
    )
}

export default MainWhoList;