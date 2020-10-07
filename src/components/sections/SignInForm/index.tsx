import React from 'react';
import { LoginFormContainer } from '../../../utils';
import './index.css'

const SignInForm = () => {
    return(
        <LoginFormContainer>
            <div className="sign-in">
                <div className="input-subtitle">Name or Email</div>
                <input type="text" placeholder="Name or Email" className="sign-in-input"/>
            </div>
            <div className="sign-in"><input type="text" placeholder="Password" className="sign-in-input"/></div>
        </LoginFormContainer>
    )
}

export default SignInForm;