import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import LoginContext from '../../../context';
import { LoginFormContainer } from '../../../utils';
import { login } from '../../api';
import './index.css'

type SignInFormProps = {
    user: {id: number, token: string}
}

const SignInForm = (props: SignInFormProps) => { 
    const [isEmailValid, setEmailValid] = useState<boolean>();
    const [isPasswordValid, setPasswordValid] = useState<boolean>();
    const [userLoginInfo, setUserLoginInfo] = useState<{id:number, token: string}>({id:0, token:""});
    const {loginAccess} = useContext(LoginContext);
    const location = useHistory();

    useEffect(()=>{  
        async function fetchData(){
            await loginAccess(userLoginInfo)
        }
        fetchData();
    })

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signinCssEffect(form);
        await login(form, setUserLoginInfo);
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

    return(
        <LoginFormContainer>
        <form onSubmit={handleSubmit}>
            <div className="sign-in">
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
                <input type="password" name="password" value={password} onChange={onChange}  placeholder="Password" className="sign-in-input"/>
                <span className="material-icons-outlined caution-icon" 
                style={{
                    display: isPasswordValid === undefined? "none" : (isPasswordValid? "none" : "block"),
                }}>report</span>                               
            </div>
            <div className="input-error" 
                style={{
                     display: isPasswordValid === undefined? "none" : (isPasswordValid? "none" : "block"),
                }}>Passwords do not match.</div>

            <div className="sign-in-button"><button type="submit" onClick={()=> location.push("/user")}>Sign In</button></div>
        </form>
        </LoginFormContainer>
    )
}

export default SignInForm;