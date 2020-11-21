import React from 'react';
import { initialProfile } from '../../../utils/Const';
import './index.css';

type ProfileImageProps = {
    editOn: boolean;
    profileImage: string | undefined;
}

const ProfileImage = ({editOn, profileImage}: ProfileImageProps) => {
    return(
        <div className="profile-image">
            <img src={profileImage === null? initialProfile : profileImage} alt="profile-img"/>
        </div>
    )
}

export default ProfileImage;