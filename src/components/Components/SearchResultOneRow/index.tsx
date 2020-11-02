import React, { useState } from 'react';
import { UserProfile, UserProfileBox, UserProfileTextBox } from '../../../utils';
import './index.css';


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
        <UserProfileBox>
        <div className="result-user-img"></div>
        <UserProfileTextBox>
            <div className="result-user-name">{user.name}</div>
            <div className="result-user-comment">{user?.comment}</div>
        </UserProfileTextBox>  
        <div><input type="button" onClick={async()=> {
                    await selectUser(user.name, currentFriendState);     
                    changeFriendState(currentFriendState);                       
                    }} 
                    style={{background: currentFriendState? "#fefefe":"#9ED5E7", 
                            border:  currentFriendState? "1px solid #9ED5E7":"1px solid #fefefe", 
                            color:  currentFriendState? "#9ED5E7":"#ffffff"}} 
                    value={currentFriendState? "Delete" : "Add"} className="add-button"/>
        </div>   
        </UserProfileBox>
    )
}

export default SearchResultOneRow;