import React, { useState } from 'react';
import { LoginFormContainer } from '../../../utils';
import './index.css'

type signInFormProps = {
    onSubmit: (form: { email: string; password: string }) => void;
    isEmailValid?: boolean;
    isPasswordValid?: boolean;
}

const SignInForm = ({ onSubmit, isEmailValid, isPasswordValid }: signInFormProps) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
      });

    const { email, password } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            email: '',
            password: ''
        }); 
    };
      
    return(
        <LoginFormContainer>
        <form onSubmit={handleSubmit}>
            <div className="sign-in">
                <div className="input-subtitle" style={{
                    color: isEmailValid === undefined? "#000000" : (isEmailValid? "#000000" : "#CC5454"),
                }}>Your email</div>
                <input type="text" name="email" value={email} onChange={onChange} placeholder="Email" className="sign-in-input"/> 
                <span className="material-icons-outlined caution-icon" style={{
                    display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block"),
                }}>
                    report
                </span>    
            </div>
            <div className="input-error" style={{
                     display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block"),
                }}>Please enter a valid email address.</div>
            <div className="sign-in">
                <input type="text" name="password" value={password} onChange={onChange}  placeholder="Password" className="sign-in-input"/>                           
            </div>
            <div className="input-error" style={{
                     display: isPasswordValid === undefined? "none" : (isPasswordValid? "none" : "block"),
                }}>Passwords do not match.</div>
            <div className="sign-in-button"><button type="submit">Sign In</button></div>
        </form>
        </LoginFormContainer>
    )
}

export default SignInForm;