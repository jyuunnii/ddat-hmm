import React, { useState } from 'react';
import { UserProfileBox, UserProfileTextBox } from '../../../utils/Styled';
import { initialProfile } from '../../../utils/Const';
import './index.css';
import { UserPublic } from '../../../utils/Type';

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
           <div className="friend-img"><img src={user.profileImageUri === null? initialProfile : user.profileImageUri} alt="profile"/></div>
           <UserProfileTextBox>
            <div className="friend-name">{user.name}</div>
            <div className="friend-comment">{user?.comment}</div>
            </UserProfileTextBox>  
            <div className="add-button"><input type="button" onClick={async()=> {
                    await selectUser(user.name, currentFriendState);     
                    changeFriendState(currentFriendState);                       
                    }} 
                    style={{backgroundColor: currentFriendState? "#ffffff":"#9ED5E7", 
                            border:  currentFriendState? "1px solid #9ED5E7":"1px solid #fefefe", 
                            color:  currentFriendState? "#9ED5E7":"#ffffff"}} 
                    value={currentFriendState? "Delete" : "Add"}/>
            </div>   
       </UserProfileBox>
    )
}

export default FriendsListOneRow;