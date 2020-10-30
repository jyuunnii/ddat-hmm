import React, { useState } from 'react';
import { UserProfile, UserProfileBox, UserProfileTextBox } from '../../../utils';
import './index.css';

type FriendsListOneRowProps = {
    user: UserProfile;
    selectUser: (userName: string, friendstate: boolean) => void;
    isFriend: boolean;
}

const FriendsListOneRow = ({user, selectUser, isFriend}: FriendsListOneRowProps) => {
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
           <div className="friend-img"></div>
           <UserProfileTextBox>
            <div className="friend-name">{user.name}</div>
            <div className="friend-comment">{user?.comment}</div>
            </UserProfileTextBox>  
            <div><input type="button" onClick={async()=> {
                    await selectUser(user.name, currentFriendState);     
                    changeFriendState(currentFriendState);                       
                    }} 
                    style={{background: currentFriendState? "#9ED5E7":"#ffffff", border:  currentFriendState? "1px solid #fefefe":"1px solid #9ED5E7", color:  currentFriendState? "#fefefe":"#9ED5E7"}} 
                    value={currentFriendState? "Delete" : "Add"} className="add-button"/>
            </div>   
       </UserProfileBox>
    )
}

export default FriendsListOneRow;