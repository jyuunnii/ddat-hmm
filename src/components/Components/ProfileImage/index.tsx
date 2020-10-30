import React from 'react';
import './index.css';

type ProfileImageProps = {
    editOn: boolean;
}

const ProfileImage = ({editOn}: ProfileImageProps) => {
    const profileImageUri = "/images/person.png";

    return(
        <div className="profile-image">
            <img src={profileImageUri} alt="profile-img"/>
        </div>
    )
}

export default ProfileImage;