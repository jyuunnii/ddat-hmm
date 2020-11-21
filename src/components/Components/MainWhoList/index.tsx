import React from 'react';
import styled from 'styled-components';
import { initialProfile } from '../../../utils/Const';
import { UserPublic } from '../../../utils/Type';
import './index.css';


const MWLContainer = styled.div`
    display: flex;
    width: 328px;
    overflow-y: hidden;
    padding-left: 32px;
    margin: 0 auto;
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
    friends: {following: UserPublic[], follower: UserPublic[]} | undefined;
    setTarget: (user: UserPublic) => void;
}

const MainWhoList = ({friends, setTarget}: MainWhoListProps) => {
    if(! Array.isArray(friends?.following) || !friends?.following.length){
        return(
          <MWLContainer>
             <div className="empty-friendlist">검색해서 친구를 추가해주세요.</div> 
          </MWLContainer>
        )
    }
    return(
        <MWLContainer>
        {friends?.following.map((friend) => {
            return(
            <MWLCWrapper key={friend.id} onClick={() => setTarget(friend)}>
                <div className="main-friend-image"><img src={friend?.profileImageUri === null ? initialProfile :friend.profileImageUri} alt="friend"/></div>
                <div className="main-friend-name">{friend.name}</div>
            </MWLCWrapper>
            )
        })}
        </MWLContainer>
    )
}

export default MainWhoList;