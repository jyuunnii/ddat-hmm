import React from 'react';
import styled from 'styled-components';
import './index.css';

const ProfileMenuContainer = styled.div`
    diplay: flex;
    flex-direction: column;
`;

const ProfileHeaderMenu = () => {
    return(
        <ProfileMenuContainer>
            <div>
                <button className="sign-out-button">
                <i className="material-icons">exit_to_app</i>sign out</button>
            </div>
            <div><button className="account-button">
                <i className="material-icons">settings</i>manage account</button></div>
        </ProfileMenuContainer>
    )
}

export default ProfileHeaderMenu;