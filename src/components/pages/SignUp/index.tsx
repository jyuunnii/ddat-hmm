import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeScale, LoginContainer } from '../../../utils';
import SignUpForm from '../../sections/SignUpForm';
import './index.css'

const SignUp = () => {
    const [isEmailValid, setEmailValid] = useState<boolean>(true);
    const [isPasswordValid, setPasswordValid] = useState<boolean>(true);
    
    const onSubmit = (form: { name: string; email: string; password: string }) => {
        if(form.email.includes("@")){
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
 
        if(form.password !== ""){
             setPasswordValid(true);
        }else{
            setPasswordValid(false);
        }
    };

    return(
        <HomeScale>
            <LoginContainer>
                <div className="sign-up-title">Join Ddat Hmm.</div>
                <div className="sign-up-form"><SignUpForm onSubmit={onSubmit} isEmailValid={isEmailValid} isPasswordValid={isPasswordValid}/></div>
                <div className="sign-in-link">
                    <span>Already have an account?</span>
                    <span> <Link to="/signin">Sign in</Link></span>
                </div>
            </LoginContainer>
        </HomeScale>
    )
}

export default SignUp;