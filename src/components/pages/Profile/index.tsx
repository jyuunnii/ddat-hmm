import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Friends, MainContainer, MainWrapper, UserPublic } from '../../../utils';
import { followByName, getFriendsById, unfollowByName, updateUserById } from '../../api';
import FriendsList from '../../Components/FriendsList';
import ProfileImage from '../../Components/ProfileImage';
import ProfileInformation from '../../Components/ProfileInformation';
import './index.css'

const ProfileScale = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow: hidden;
`;

// it needs some feedback about componenet structure "form & button"!

type ProfilePageProps = {
    user: {id: number, token: string};
}

const ProfilePage = (props: ProfilePageProps) => {
    const bgimages = "/images/bg.jpeg";
    const [editOn, setEditOn] = useState<boolean>(false);
    const [profile, setProfile] = useState<UserPublic>({id: 0, name: "", friends:{following: [], follower:[]}});
    const [moveUp, setMoveUp] = useState<boolean>(false);
    const [oldFriends, setOldFriends] = useState<Friends>({follower: [], following:[]});

    useEffect(() => {    
        if(props.user.id > 0){
            getFriendsById(props.user.id, props.user.token, setProfile, setOldFriends);  
        }
    }, [props.user.id, props.user.token])

    const onCreate = async(data: UserPublic) => {
        await setProfile(data);
        await updateUserById(props.user.id, props.user.token, {name: data.name, comment: data.comment});
    }

    const [newFriends, setNewFriends] = useState<string[]>([]);
    const [deletedFriends, setDeletedFriends] = useState<string[]>([]);
    const updateFriends = async (userName: string, friendstate: boolean) => {
        if(!friendstate){
            setNewFriends([
                ...newFriends,
                userName
            ]); 
            await followByName(props.user.id, props.user.token, userName)
        }else{
            setDeletedFriends([
                ...deletedFriends,
                userName
            ])
            await unfollowByName(props.user.id, props.user.token, userName)
        }
    }

    const showFriendsList = (moveUp: boolean) => {
        if(moveUp){
            setMoveUp(true);
        }else{
            setMoveUp(false);
        }
    }

    return(
        <ProfileScale>
            <div><img src={bgimages} alt="bg-img" className="profile-bg-img"/></div>
            <div className="profile-bg-cover"></div>
            <MainContainer>
                    <MainWrapper>
                        <ProfileImage editOn={editOn}/>
                    </MainWrapper>
                    <MainWrapper>
                        <ProfileInformation editOn={editOn} setEditOn={setEditOn} profile={profile} onCreate={onCreate}/>
                    </MainWrapper>
                    <MainWrapper>
                        <div className="profile-edit-off" style={{display: editOn? "none": "block"}}>
                            <button onClick={()=>showFriendsList(true)} className="friend-button">
                                <span className="material-icons">face</span>
                                <div className="friend-button-name">friend</div>
                            </button>
                            <button onClick={()=>setEditOn(true)} className="edit-on-button">
                                <span className="material-icons-round">edit</span>
                                <div className="edit-on-button-name">edit</div>
                            </button>
                        </div>
                        <div className="profile-edit-on" style={{display: editOn? "block": "none"}}>
                            <button className="cancel-button" onClick={()=>setEditOn(false)}>CANCEL</button>
                        </div>
                    </MainWrapper>
                    <MainWrapper>
                         <div className="friendslist-box" style={{
                             position: "absolute",
                             bottom: moveUp? "32px" : "-440px"
                         }}>
                             <button onClick={()=>showFriendsList(false)} className="friendslist-close-button"><span className="material-icons">cancel</span></button>
                            <FriendsList currentFriendsList={oldFriends} updateFriends={updateFriends}/>
                        </div>
                    </MainWrapper>
            </MainContainer>
        </ProfileScale>
    )
}

export default ProfilePage;