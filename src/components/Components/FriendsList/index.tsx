import React from 'react';
import styled from 'styled-components';
import { UserProfileContainer } from '../../../utils/Styled';
import { UserPublic } from '../../../utils/Type';
import FriendsListOneRow from '../FriendsListOneRow';


const FWrapper = styled.div`
    width: 100%;
    height: 368px;
    overflow-y: auto;
    margin-top: 32px;
    padding-top: 32px;
    padding-right: 18px;
`;

type FriendsListProps = {
    currentFriendsList: UserPublic[];
    updateFriends: (user: string, friendstate: boolean) => void;
}

const FriendsList = ({currentFriendsList, updateFriends}: FriendsListProps) => {
    const selectUser = (userName: string, friendstate: boolean) => {
        updateFriends(userName, friendstate);
    }
    return(
        <UserProfileContainer>
            <FWrapper>
                {currentFriendsList.map((friend)=>{
                    return(<FriendsListOneRow key={friend.id} user={friend} selectUser={selectUser} />)
                })}
            </FWrapper>
        </UserProfileContainer>
        
    )
}

export default FriendsList;