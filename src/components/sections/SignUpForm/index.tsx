import React, { useState } from 'react';
import { LoginFormContainer } from '../../../utils';
import './index.css'

type signUpFormProps = {
    onSubmit: (form: { name: string; email: string; password: string }) => void;
    isEmailValid?: boolean;
    isPasswordValid?: boolean;
}

const SignUpForm = ({ onSubmit, isEmailValid, isPasswordValid }: signUpFormProps) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
      });

    const { name, email, password } = form;

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
            name: '',
            email: '',
            password: ''
        }); 
    };

    return(
        <LoginFormContainer>
        <form onSubmit={handleSubmit}>
            <div className="sign-up">
                <div className="input-subtitle">Name</div>
                <input type="text"  name="name" value={name} onChange={onChange} placeholder="Name" className="sign-up-input"/>
            </div>
            <div className="sign-up">
                <div className="input-subtitle" style={{
                 color: isEmailValid === undefined? "#000000" : (isEmailValid? "#000000" : "#CC5454"),
            }}>Email</div>
                <input type="text" name="email" value={email} onChange={onChange} placeholder="Email" className="sign-up-input"/>
                <span className="material-icons-outlined caution-icon" style={{
                    display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block"),
                }}>
                    report
                </span>    
            </div>
            <div className="input-error" style={{
                display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block"),
                color: "#CC5454", 
            }}>Please enter a valid email address.</div>
            <div className="sign-up">
                <div className="input-subtitle">Password</div>
                <input type="text" name="password" value={password} onChange={onChange} placeholder="Password" className="sign-up-input"/>
            </div>     
            <div className="sign-up-button"><button>Sign Up</button></div>   
            
        </form>
        </LoginFormContainer>
    )
}

export default SignUpForm;