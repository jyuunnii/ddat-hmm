import React from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../../../context';
import { LoginContainer, MainScale } from '../../../utils';
import SignInForm from '../../Components/SignInForm';
import './index.css'


const SignIn = () => {
    return(
        <LoginContext.Consumer>
        {loginUser => {
        return(
            <MainScale>
                <LoginContainer>
                    <div className="sign-in-title">Ddat Hmm Again!</div>
                    <div className="sign-in-form"><SignInForm user={loginUser.user} /></div>
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