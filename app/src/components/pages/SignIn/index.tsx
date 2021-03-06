import React from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../../../context';
import { LoginContainer, MainScale } from '../../../utils/Styled';
import SignInForm from '../../Components/SignInForm';
import './index.css'


const SignIn = () => {
    return(
        <LoginContext.Consumer>
        {token => {
        return(
            <MainScale>
                <LoginContainer>
                    <div className="sign-in-title">Ddat Hmm Again!</div>
                    <div className="sign-in-form"><SignInForm user={token.userToken} /></div>
                    <div className="sign-up-link">
                        <Link to="/signup">create a new account</Link>
                    </div>
                </LoginContainer>
            </MainScale>
        )
        }}
        </LoginContext.Consumer>
    )   
}

export default SignIn;