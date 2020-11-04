import React, { useContext, useEffect, useState } from 'react';
import LoginContext from '../../../context';
import { LoginFormContainer } from '../../../utils';
import { login } from '../../api';
import './index.css'

interface UserData {
    name: string
    email: string
    password: string
}

const SignInForm = () => {
    const [isEmailValid, setEmailValid] = useState<boolean>();
    const [isPasswordValid, setPasswordValid] = useState<boolean>();
    const [userLoginInfo, setUserLoginInfo] = useState<{id:number, token: string}>({id:7438, token:""});
    const {loginAccess} = useContext(LoginContext);
    
    const [form, setForm] = useState({
        email: "",
        password: ""
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
        signinCssEffect(form);
        login(form, setUserLoginInfo);
        //TODO: login 완료 후 페이지 전환
        setForm({
            email: "",
            password: ""
        }); 
    };

    const signinCssEffect = (form: { email: string; password: string }) => {
       if(form.email.includes("@")){
           setEmailValid(true);
       }else{
           setEmailValid(false);
       }

       if(form.password !== "" && form.password !== " "){
            setPasswordValid(true);
       }else{
           setPasswordValid(false);
       }
    };

    useEffect(()=>{
        loginAccess(userLoginInfo)
    })
    
    return(    
        <LoginFormContainer>
        <form onSubmit={handleSubmit}>
            <div className="sign-in">
                <div className="input-subtitle" 
                style={{
                    color: isEmailValid === undefined? "#000000" : (isEmailValid? "#000000" : "#CC5454"),
                }}>Your email</div>
                <input type="text" name="email" value={email} onChange={onChange} placeholder="Email" className="sign-in-input"/> 
                <span className="material-icons-outlined caution-icon" 
                style={{
                    display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block"),
                }}>report</span>    
            </div>
            <div className="input-error" 
                style={{
                     display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block"),
                }}>Please enter a valid email address.</div>



            <div className="sign-in">
                <input type="text" name="password" value={password} onChange={onChange}  placeholder="Password" className="sign-in-input"/>
                <span className="material-icons-outlined caution-icon" 
                style={{
                    display: isPasswordValid === undefined? "none" : (isPasswordValid? "none" : "block"),
                }}>report</span>                               
            </div>
            <div className="input-error" 
                style={{
                     display: isPasswordValid === undefined? "none" : (isPasswordValid? "none" : "block"),
                }}>Passwords do not match.</div>



            <div className="sign-in-button"><button type="submit">Sign In</button></div>
        </form>
        </LoginFormContainer>
    )
}

export default SignInForm;