import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NameEmailPasswordValidation } from '../../../utils/Function';
import { LoginFormContainer } from '../../../utils/Styled';
import { signup } from '../../api';
import './index.css'
 
const SignUpForm = () => {
    const [isNameValid, setNameValid] = useState<boolean>();
    const [isEmailValid, setEmailValid] = useState<boolean>();
    const [isPasswordValid, setPasswordValid] = useState<boolean>();
    const location = useHistory();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
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
        async function fetch(){
            if(formValidation(form)){
                await signup(form);
                alert("가입되었습니다.");
                location.push("/signin");
            }
        }
        fetch();
    };

    const formValidation = (form: { name: string; email: string; password: string }) => {
        let filter = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        let Korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        let English = /[a-zA-Z]/;
        let number = /[0-9]/;

        if(!Korean.test(name) && !English.test(name)){
            setNameValid(false);
        }else{
            setNameValid(true);
        }

        if(!filter.test(email)){
            setEmailValid(false);
        }else{
            setEmailValid(true);
        }

        if(password.length < 4 || password.length > 9 || !English.test(password) || !number.test(password)){
            setPasswordValid(false);
        }else{
            setPasswordValid(true);
        }

       return NameEmailPasswordValidation(form);
    }

    return(
        <LoginFormContainer>
        <form onSubmit={handleSubmit}>
            <div className="sign-up-wrapper">
                <div className="sign-up">
                    <div className="input-subtitle" style={{color: isNameValid === undefined? "#000000" : (isNameValid? "#000000" : "#CC5454")}}>Name</div>
                    <input type="text"  name="name" value={name} onChange={onChange} placeholder="Name" className="sign-up-input"/>
                    <i className="material-icons-outlined" style={{display: isNameValid === undefined? "none" : (isNameValid? "none" : "block")}}>report</i>    
                </div>
                <div className="input-error" style={{display: isNameValid === undefined? "none" : (isNameValid? "none" : "block")}}>Please enter a valid name.</div>  
                
                <div className="sign-up">
                    <div className="input-subtitle" style={{color: isEmailValid === undefined? "#000000" : (isEmailValid? "#000000" : "#CC5454")}}>Email</div>
                    <input type="text" name="email" value={email} onChange={onChange} placeholder="Email" className="sign-up-input"/>
                    <i className="material-icons-outlined" style={{display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block")}}>report</i>    
                </div>
                <div className="input-error" style={{display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block")}}>Please enter a valid email address.</div>

                <div className="sign-up">
                    <div className="input-subtitle" style={{color: isPasswordValid === undefined? "#000000" : (isPasswordValid? "#000000" : "#CC5454")}}>Password</div>
                    <input type="text" name="password" value={password} onChange={onChange} placeholder="Password" className="sign-up-input"/>
                    <i className="material-icons-outlined" style={{display: isPasswordValid === undefined? "none" : (isPasswordValid? "none" : "block")}}>report</i>    
                </div>
                <div className="input-error" style={{display: isPasswordValid === undefined? "none" : (isPasswordValid? "none" : "block")}}>The password must be 4 to 8 characters long and contain a mix of letters and numbers.</div>  
            </div>
           

            <div className="sign-up-button"><button type="submit">Sign Up</button></div>      
        </form>
        </LoginFormContainer>
    )
}

export default SignUpForm;