import React, { useState } from 'react';
import LoginContext from '../../../context';
import { UserPublic, UserProfileBox, UserProfileTextBox, initialProfile } from '../../../utils';
import './index.css';


type SearchResultOneRowProps = {
    user: UserPublic;
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
        <LoginContext.Consumer>
        {token => {
            if(token.userToken.id > 0){
                return(
                    <UserProfileBox>
                    <div className="result-user-img"><img src={user.profileImageUri === null? initialProfile : user.profileImageUri} alt="profile"/></div>
                    <UserProfileTextBox>
                        <div className="result-user-name">{user.name}</div>
                        <div className="result-user-comment">{user?.comment}</div>
                    </UserProfileTextBox>  
                    <div><input type="button" onClick={async()=> {
                                await selectUser(user.name, currentFriendState);     
                                await changeFriendState(currentFriendState);                       
                                }} 
                                style={{background: currentFriendState? "#fefefe":"#9ED5E7", 
                                        border:  currentFriendState? "1px solid #9ED5E7":"1px solid #fefefe", 
                                        color:  currentFriendState? "#9ED5E7":"#ffffff"}} 
                                value={currentFriendState? "Delete" : "Add"} className="add-button"/>
                    </div>   
                    </UserProfileBox>
                )
            }else{
                return(
                    <UserProfileBox>
                    <div className="result-user-img"><img src={user.profileImageUri === null? initialProfile : user.profileImageUri} alt="profile"/></div>
                    <UserProfileTextBox>
                        <div className="result-user-name">{user.name}</div>
                        <div className="result-user-comment">{user?.comment}</div>
                    </UserProfileTextBox>  
                    </UserProfileBox>
                );
            }
        }}
        </LoginContext.Consumer>
    )
}

export default SearchResultOneRow;