import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LoginContext from '../../../context';
import { initialToken } from '../../../utils/Const';
import './index.css';

const ProfileMenuContainer = styled.div`
    diplay: flex;
    flex-direction: column;
`;

const ProfileHeaderMenu = () => {
    const location = useHistory();
    const {loginAccess} = useContext(LoginContext);

    async function initialization(){
        await loginAccess(initialToken);
        location.push("/");
    }

    
    return(
        <ProfileMenuContainer>
            <div>           
                <button className="sign-out-button" onClick={initialization}>
                <i className="material-icons">exit_to_app</i>sign out</button> 
            </div>
            <div><button className="account-button">
                <i className="material-icons">settings</i>manage account</button></div>
        </ProfileMenuContainer>
    )
}

export default ProfileHeaderMenu;