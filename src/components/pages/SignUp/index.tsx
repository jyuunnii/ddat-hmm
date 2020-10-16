import React from 'react';
import { Link } from 'react-router-dom';
import { HomeScale, LoginContainer } from '../../../utils';
import SignUpForm from '../../sections/SignUpForm';
import './index.css'

const SignUp = () => { 
    return(
        <HomeScale>
            <LoginContainer>
                <div className="sign-up-title">Join Ddat Hmm.</div>
                <div className="sign-up-form"><SignUpForm/></div>
                <div className="sign-in-link">
                    <span>Already have an account?</span>
                    <span> <Link to="/signin">Sign in</Link></span>
                </div>
            </LoginContainer>
        </HomeScale>
    )
}

export default SignUp;