import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginContext from '../../../context';
import { initialToken } from '../../../utils/Const';
import './index.css';

const ProfileMenuContainer = styled.div`
    diplay: flex;
    flex-direction: column;
`;

const ProfileHeaderMenu = () => {
    const {loginAccess} = useContext(LoginContext);

    async function initialization(){
        await loginAccess(initialToken);
    }

    
    return(
        <ProfileMenuContainer>
            <div>
                <Link to="/">
                <button className="sign-out-button" onClick={initialization}>
                <i className="material-icons">exit_to_app</i>sign out</button>
                </Link>
            </div>
            <div><button className="account-button">
                <i className="material-icons">settings</i>manage account</button></div>
        </ProfileMenuContainer>
    )
}

export default ProfileHeaderMenu;