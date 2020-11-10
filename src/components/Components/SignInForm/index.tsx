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
        if(props.user.id > 0){
            location.push({
                pathname: `/user/${props.user.id}`
            })
        }
    },[userLoginInfo, loginAccess, location, props.user.id])

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
        if(formValidation(form)){
            await login(form, setUserLoginInfo);
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

        if(!filter.test(email)){
            return false;
        }

        if(password.length < 4 || password.length > 9 || !letter.test(password) || !number.test(password)){
            if(password.length < 4){
                return false;
            }
            if(password.length > 9){
                return false;
            }
            if(!letter.test(password)){
                return false;
            }
            if(!number.test(password)){
                return false;
            }
        }
        return true;
    }

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

            <div className="sign-in-button"><button type="submit" onClick={()=> {
                if(form.email !== "" && form.password !== ""){
                    location.push("/signin")}
                }}>Sign In</button></div>
        </form>
        </LoginFormContainer>
    )
}

export default SignInForm;