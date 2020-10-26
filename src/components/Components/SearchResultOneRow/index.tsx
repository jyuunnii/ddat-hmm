import React, { useState } from 'react';
import styled from 'styled-components';
import { UserProfile } from '../../../utils';
import './index.css';

const SBox = styled.div`
    display: flex;
    padding-bottom: 12px;
`;

const STextBox = styled.div`
    padding-left: 18px;
    padding-right: 8px; 
`;

type SearchResultOneRowProps = {
    user: UserProfile;
    selectUser: (userName: string, friendstate: boolean) => void;
    isFriend: boolean;
}

const SearchResultOneRow = ({user, selectUser, isFriend}: SearchResultOneRowProps) => {
    const [currentFriendState, setCurrentFriendState] = useState<boolean>(isFriend); // api 에서 불러온 초기 친구상태 : isFriend 
    const changeFriendState = (friendstate: boolean) => {
        if(friendstate){
            setCurrentFriendState(false);
        }else{
            setCurrentFriendState(true);
        }
    }

    return(
        <SBox>
        <div className="result-user-img"></div>
        <STextBox>
            <div className="result-user-name">{user.name}</div>
            <div className="result-user-comment">{user?.comment}</div>
        </STextBox>  
        <div><input type="button" onClick={async()=> {
                    await selectUser(user.name, currentFriendState);     
                    changeFriendState(currentFriendState);                       
                    }} 
                    style={{background: currentFriendState? "#9ED5E7":"#ffffff", border:  currentFriendState? "1px solid #fefefe":"1px solid #9ED5E7", color:  currentFriendState? "#fefefe":"#9ED5E7"}} 
                    value={currentFriendState? "Delete" : "Add"} className="add-button"/>
        </div>   
        </SBox>
    )
}

export default SearchResultOneRow;