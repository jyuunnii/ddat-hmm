import React from 'react';
import { LoginContainer } from '../../../utils';
import LoginForm from '../SignInForm';
import './index.css'

const SignIn = () => {
    return(
        <LoginContainer>
            <div className="sign-in-title">Ddat Hmm Again!</div>
            <div className="login-form"><LoginForm/></div>
            <div className="sign-in-button"><button>Sign In</button></div>
            <div className="sign-up-link">create a new account</div>
        </LoginContainer>
    )
}

export default SignIn;