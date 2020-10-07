import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeScale, LoginContainer } from '../../../utils';
import SignInForm from '../../sections/SignInForm';
import './index.css'

const SignIn = () => {
    const [isEmailValid, setEmailValid] = useState<boolean>(true);
    const [isPasswordValid, setPasswordValid] = useState<boolean>(true);

    const onSubmit = (form: { email: string; password: string }) => {
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
                <div className="sign-in-title">Ddat Hmm Again!</div>
                <div className="sign-in-form"><SignInForm onSubmit={onSubmit} isEmailValid={isEmailValid} isPasswordValid={isPasswordValid}/></div>
                <div className="sign-up-link">
                    <Link to="/signup">create a new account</Link>
                </div>
            </LoginContainer>
        </HomeScale>
    )
}

export default SignIn;