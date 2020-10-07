import React from 'react';
import { Link } from 'react-router-dom';
import { HomeScale, LoginContainer } from '../../../utils';
import SignInForm from '../../sections/SignInForm';
import './index.css'

const SignIn = () => {
    return(
        <HomeScale>
            <LoginContainer>
                <div className="sign-in-title">Ddat Hmm Again!</div>
                <div className="sign-in-form"><SignInForm/></div>
                <div className="sign-in-button"><button>Sign In</button></div>
                <div className="sign-up-link">
                    <Link to="/signup">create a new account</Link>
                </div>
            </LoginContainer>
        </HomeScale>
    )
}

export default SignIn;