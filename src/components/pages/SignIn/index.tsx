import React from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer, MainScale } from '../../../utils';
import SignInForm from '../../Components/SignInForm';
import './index.css'

interface UserData {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const SignIn = () => {
    return(
        <MainScale>
            <LoginContainer>
                <div className="sign-in-title">Ddat Hmm Again!</div>
                <div className="sign-in-form"><SignInForm /></div>
                <div className="sign-up-link">
                    <Link to="/signup">create a new account</Link>
                </div>
            </LoginContainer>
        </MainScale>
    )
    
  
}

export default SignIn;