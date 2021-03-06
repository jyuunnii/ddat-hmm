import React, { useState } from 'react';
import styled from 'styled-components';
import { UserPublic } from '../../../utils/Type';
import './index.css';

const ProfileContainer = styled.div`
    width: 256px;
    height: 154px;
    margin: 18px auto;
`;

type ProfileInformationProps = {
    editOn: boolean;
    setEditOn: (mode: boolean) => void;
    profile: UserPublic;
    onCreate: (value: UserPublic) => void;
}

const ProfileInformation = ({editOn, setEditOn, profile, onCreate}: ProfileInformationProps) => {
    const [newprofile, setNewProfile] = useState({
        id: profile.id,
        name: profile.name,
        comment: profile.comment,
        profileImageUri: profile.profileImageUri,
        friends: profile.friends
    });
    const {name, comment} =  newprofile;

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target; 
        if(value !== null){
            setNewProfile({
                ...newprofile,
                [name]: value
            })
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onCreate(newprofile);
        setEditOn(false);
    };

    if(!editOn){
        return(
            <ProfileContainer> 
                <div className="profile-name">{profile.name}</div>
                <div className="profile-comment">{profile.comment}</div>
            </ProfileContainer>
        )
    }else{
        return(
            <ProfileContainer>  
                <form onSubmit={handleSubmit}>
                    <div className="profile-name-edit"  style={{position:"relative"}}>
                        <input type="text" name="name" value={name} onChange={onChange} maxLength={20} />
                        <i className="material-icons-round">edit</i>
                    </div>
                    <div className="profile-comment-edit"  style={{position:"relative"}}>
                        <textarea name="comment" value={comment} onChange={onChange} rows={4} maxLength={100} />
                        <i className="material-icons-round">edit</i>
                    </div>
                    <button className="save-button" type="submit">SAVE</button>
                </form>
            </ProfileContainer>
        )
    }
}

export default ProfileInformation;