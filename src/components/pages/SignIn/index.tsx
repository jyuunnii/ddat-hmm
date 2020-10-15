import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeScale, LoginContainer } from '../../../utils';
import SignInForm from '../../sections/SignInForm';
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
    const [user, setUser] = useState<UserData>();
   
    return(
        <HomeScale>
            <LoginContainer>
                <div className="sign-in-title">Ddat Hmm Again!</div>
                <div className="sign-in-form"><SignInForm setUser={() => setUser(user)} /></div>
                <div className="sign-up-link">
                    <Link to="/signup">create a new account</Link>
                </div>
            </LoginContainer>
        </HomeScale>
    )
    
  
}

export default SignIn;