import React, { useState } from 'react';
import { LoginFormContainer, serverUrl } from '../../../utils';
import './index.css'
 
const SignUpForm = () => {
    const [isNameValid, setNameValid] = useState<boolean>();
    const [isEmailValid, setEmailValid] = useState<boolean>();
    const [isPasswordValid, setPasswordValid] = useState<boolean>();

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
        signup(form); 
        try{
            postData(form);
        } catch(e){
            console.log(e);
        }
        setForm({
            name: "",
            email: "",
            password: ""
        }); 
    };

    const signup = (form: { name: string; email: string; password: string } ) => {
        if(form.name !== "" && form.name !== " "){
            setNameValid(true);
        }else{
            setNameValid(false);
        }

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
 
    
    async function postData(data: { name: string; email: string; password: string } ) {
        await fetch(serverUrl+'/user', {
            headers:{
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => console.log(response))
        .catch((error) => console.log("Error: ", error));
    }
   
   
    

    return(
        <LoginFormContainer>
        <form onSubmit={handleSubmit}>
            <div className="sign-up">
                <div className="input-subtitle" 
                style={{
                    color: isNameValid === undefined? "#000000" : (isNameValid? "#000000" : "#CC5454"),
                }}>Name</div>
                <input type="text"  name="name" value={name} onChange={onChange} placeholder="Name" className="sign-up-input"/>
                <span className="material-icons-outlined caution-icon" 
                style={{
                    display: isNameValid === undefined? "none" : (isNameValid? "none" : "block"),
                }}>report</span>    
            </div>
            <div className="input-error" 
            style={{
                display: isNameValid === undefined? "none" : (isNameValid? "none" : "block"),
                color: "#CC5454", 
            }}>Please enter a valid name.</div>  
            

            
            <div className="sign-up">
                <div className="input-subtitle" 
                style={{
                    color: isEmailValid === undefined? "#000000" : (isEmailValid? "#000000" : "#CC5454"),
                }}>Email</div>
                <input type="text" name="email" value={email} onChange={onChange} placeholder="Email" className="sign-up-input"/>
                <span className="material-icons-outlined caution-icon" 
                style={{
                    display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block"),                    
                }}>report</span>    
            </div>
            <div className="input-error" 
            style={{
                display: isEmailValid === undefined? "none" : (isEmailValid? "none" : "block"),
                color: "#CC5454", 
            }}>Please enter a valid email address.</div>



            <div className="sign-up">
                <div className="input-subtitle" 
                style={{
                    color: isPasswordValid === undefined? "#000000" : (isPasswordValid? "#000000" : "#CC5454"),
                }}>Password</div>
                <input type="text" name="password" value={password} onChange={onChange} placeholder="Password" className="sign-up-input"/>
                <span className="material-icons-outlined caution-icon" 
                style={{
                    display: isPasswordValid === undefined? "none" : (isPasswordValid? "none" : "block"),
                }}>report</span>    
            </div>
            <div className="input-error" 
            style={{
                display: isPasswordValid === undefined? "none" : (isPasswordValid? "none" : "block"),
                color: "#CC5454", 
            }}>Please enter a valid password.</div>  



            <div className="sign-up-button"><button>Sign Up</button></div>   
            
        </form>
        </LoginFormContainer>
    )
}

export default SignUpForm;