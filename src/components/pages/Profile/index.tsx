import React, { useState } from 'react';
import styled from 'styled-components';
import { MainContainer, MainWrapper, UserProfile } from '../../../utils';
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

// 임시 친구목록 데이터 (내 정보에서 불러오기) ==> 최상위 컴포넌트로 이동 ==> updateFriends 를 통해 현재 컴포넌트에서 새로운 친구목록 관리 => 상위 컴포넌트에 전달하여 상태관리
const currentFriendsList: UserProfile[] = [{name: "test1"}, {name: "test2", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"}
, {name: "test3", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"}
, {name: "test4", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"}
, {name: "test5", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"}
, {name: "test6", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"}];

const ProfilePage = () => {
    const bgimages = "/images/bg.jpeg";
    const [editOn, setEditOn] = useState<boolean>(false);
    const [profile, setProfile] = useState<UserProfile>({name: "Jynn Park", comment: "Hello !"});
    const [moveUp, setMoveUp] = useState<boolean>(false);
    const onCreate = async(data: UserProfile) => {
        await setProfile(data);
        //console.log("new profile: ",data);
    }

    const [newfriendsList, setNewFriendsList] = useState<string[]>([]);
    const updateFriends = (user: string, friendstate: boolean) => {
        if(friendstate){
            setNewFriendsList([
                ...newfriendsList,
                user
            ]); 
        }else{
            const results: string[] = newfriendsList.filter(friend => !(friend === user));
            setNewFriendsList(results);
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
                             bottom: moveUp? "48px" : "-400px"
                         }}>
                             <button onClick={()=>showFriendsList(false)} className="friendslist-close-button"><span className="material-icons">cancel</span></button>
                            <FriendsList currentFriendsList={currentFriendsList} updateFriends={updateFriends}/>
                        </div>
                    </MainWrapper>
            </MainContainer>
        </ProfileScale>
    )
}

export default ProfilePage;