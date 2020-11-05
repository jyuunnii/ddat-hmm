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
    friends: {following: UserPublic[], follower: UserPublic[]};
}

const MainWhoList = ({friends}: MainWhoListProps) => {
    if(! Array.isArray(friends.following) || !friends.following.length){
        return(
          <MWLContainer>
             <div>친구를 추가해주세요.</div> 
          </MWLContainer>
        )
    }
    return(
        <MWLContainer>
        {friends.following.map((friend) => {
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