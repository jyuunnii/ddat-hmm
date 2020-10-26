import React, { useState } from 'react';
import { MainContainer, MainScale, MainWrapper, UserProfile } from '../../../utils';
import ProfileImage from '../../Components/ProfileImage';
import ProfileInformation from '../../Components/ProfileInformation';
import './index.css'

// it needs some feedback about componenet structure "form & button"!

const ProfilePage = () => {
    const bgimages = "/images/bg.jpeg";
    const [editOn, setEditOn] = useState<boolean>(false);
    const [profile, setProfile] = useState<UserProfile>({name: "Jynn Park", comment: "Hello !"});
    const onCreate = async(data: UserProfile) => {
        await setProfile(data);
        //console.log("new profile: ",data);
    }
   
    return(
        <MainScale>
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
                        <div className="friend-button"><button>FRIENDS</button></div>  
                    </MainWrapper>
                    <MainWrapper>
                        <div className="profile-edit-off" style={{display: editOn? "none": "block"}}>
                            <button onClick={()=>setEditOn(true)}><span className="material-icons-round profile-edit-icon">edit</span></button>
                        </div>
                        <div className="profile-edit-on" style={{display: editOn? "block": "none"}}>
                            <button className="cancel-button" onClick={()=>setEditOn(false)}>CANCEL</button>
                        </div>
                    </MainWrapper>
            </MainContainer>
        </MainScale>
    )
}

export default ProfilePage;