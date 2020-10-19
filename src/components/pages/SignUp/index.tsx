import React from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer, MainScale } from '../../../utils';
import SignUpForm from '../../Components/SignUpForm';
import './index.css'

const SignUp = () => { 
    return(
        <MainScale>
            <LoginContainer>
                <div className="sign-up-title">Join Ddat Hmm.</div>
                <div className="sign-up-form"><SignUpForm/></div>
                <div className="sign-in-link">
                    <span>Already have an account?</span>
                    <span> <Link to="/signin">Sign in</Link></span>
                </div>
            </LoginContainer>
        </MainScale>
    )
}

export default SignUp;