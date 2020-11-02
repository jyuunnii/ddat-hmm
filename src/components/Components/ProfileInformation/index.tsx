import React, { useState } from 'react';
import styled from 'styled-components';
import { UserProfile } from '../../../utils';
import './index.css';

const ProfileContainer = styled.div`
    width: 256px;
    height: 154px;
    margin: 18px auto;
`;

type ProfileInformationProps = {
    editOn: boolean;
    setEditOn: (mode: boolean) => void;
    profile: UserProfile;
    onCreate: (value: UserProfile) => void;
}

const ProfileInformation = ({editOn, setEditOn, profile, onCreate}: ProfileInformationProps) => {
    const [newprofile, setNewProfile] = useState({
        name: profile.name,
        comment: profile.comment
    });
    const {name, comment} =  newprofile;

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setNewProfile({
            ...newprofile,
            [name]: value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onCreate(newprofile);
        setEditOn(false);
    };

    if(!editOn){
        return(
            <ProfileContainer> 
                <div className="profile-name">{profile?.name}</div>
                <div className="profile-comment">{profile?.comment}</div>
            </ProfileContainer>
        )
    }else{
        return(
            <ProfileContainer>  
                <form onSubmit={handleSubmit}>
                    <div className="profile-name-edit"  style={{position:"relative"}}>
                        <textarea name="name" value={name} onChange={onChange} rows={1} maxLength={20} placeholder=""/>
                        <span className="material-icons-round edit-name">edit</span>
                    </div>
                    <div className="profile-comment-edit"  style={{position:"relative"}}>
                        <textarea name="comment" value={comment} onChange={onChange} rows={4} maxLength={100} placeholder=""/>
                        <span className="material-icons-round edit-comment">edit</span>
                    </div>
                    <button className="save-button" type="submit">SAVE</button>
                </form>
            </ProfileContainer>
        )
    }
}

export default ProfileInformation;