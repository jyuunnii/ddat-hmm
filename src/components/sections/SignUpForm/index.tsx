import React from 'react';
import { LoginFormContainer } from '../../../utils';
import './index.css'

const SignUpForm = () => {
    return(
        <LoginFormContainer>
            <div className="sign-up">
                <div className="input-subtitle">Name</div>
                <input type="text" placeholder="Name" className="sign-up-input"/>
            </div>
            <div className="sign-up">
                <div className="input-subtitle">Email</div>
                <input type="text" placeholder="Email" className="sign-up-input"/>
            </div>
            <div className="sign-up">
                <div className="input-subtitle">Password</div>
                <input type="text" placeholder="Password" className="sign-up-input"/>
            </div>        
        </LoginFormContainer>
    )
}

export default SignUpForm;