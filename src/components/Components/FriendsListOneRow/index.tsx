import React, { useState } from 'react';
import { UserPublic, UserProfileBox, UserProfileTextBox } from '../../../utils';
import './index.css';

type FriendsListOneRowProps = {
    user: UserPublic;
    selectUser: (userName: string, friendstate: boolean) => void;
}

const FriendsListOneRow = ({user, selectUser}: FriendsListOneRowProps) => {
    const [currentFriendState, setCurrentFriendState] = useState<boolean>(true); // api 에서 불러온 초기 친구상태 : isFriend 
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
                    style={{background: currentFriendState? "#ffffff":"#9ED5E7", 
                            border:  currentFriendState? "1px solid #9ED5E7":"1px solid #fefefe", 
                            color:  currentFriendState? "#9ED5E7":"#ffffff"}} 
                    value={currentFriendState? "Delete" : "Add"} className="add-button"/>
            </div>   
       </UserProfileBox>
    )
}

export default FriendsListOneRow;