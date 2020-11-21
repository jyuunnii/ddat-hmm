import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import LoginContext from '../../../context';
import { LoginFormContainer } from '../../../utils/Styled';
import { initialToken } from '../../../utils/Const';
import { login } from '../../api';
import './index.css'
import { EmailPasswordValidation } from '../../../utils/Function';

type SignInFormProps = {
    user: {id: number, token: string}
}

const SignInForm = (props: SignInFormProps) => { 
    const [isEmailValid, setEmailValid] = useState<boolean>();
    const [isPasswordValid, setPasswordValid] = useState<boolean>();
    const [userLoginInfo, setUserLoginInfo] = useState<{id:number, token: string}>(initialToken);
    const {loginAccess} = useContext(LoginContext);
    const location = useHistory();
   
    useEffect(()=>{  
        async function fetchData(){
            await loginAccess(userLoginInfo)
        }
        fetchData();

        if(props.user.id > 0){
            location.push({
                pathname: `/user/${props.user.id}`
            })
        }
    },[userLoginInfo, loginAccess, location, props.user.id])


    const [form, setForm] = useState({email: "", password: ""});
    const { email, password } = form;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setForm({
          ...form,
          [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        async function fetch(){  
            await login(form).then(data => {
                if(data !== undefined){
                    setUserLoginInfo(data);
                }else{
                    alert("로그인 정보가 일치하지 않습니다.");
                }
            })     
        }
        if(formValidation(form)){
            fetch();
        }  
    };

    const formValidation = (form: { email: string; password: string }) => {
        let filter = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        let letter = /[a-zA-Z]/;
        let number = /[0-9]/;

        if(!filter.test(email)){
            setEmailValid(false);
        }else{
            setEmailValid(true);
        }

        if(password.length < 4 || password.length > 9 || !letter.test(password) || !number.test(password)){
            setPasswordValid(false);
        }else{
            setPasswordValid(true);
        }

        return EmailPasswordValidation(form);
    }

    return(
        <LoginFormContainer>
        <form onSubmit={handleSubmit} className="sign-in-form">
            <div className="sign-in">
                <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" className="sign-in-input"/> 
                <i className="material-icons-outlined" style={{display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block")}}>report</i>    
            </div>
            <div className="input-error" style={{display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block")}}>Please enter a valid email address.</div>

            <div className="sign-in">
                <input type="password" name="password" value={password} onChange={handleChange}  placeholder="Password" className="sign-in-input"/>
                <i className="material-icons-outlined" style={{display: isPasswordValid === undefined? "none" : (isPasswordValid? "none" : "block")}}>report</i>                               
            </div>
            <div className="input-error" style={{display: isPasswordValid === undefined? "none" : (isPasswordValid? "none" : "block")}}>Passwords do not match.</div>

            <div className="sign-in-button">
                <button type="submit">Sign In</button>
            </div>
        </form>
        </LoginFormContainer>
    )
}

export default SignInForm;