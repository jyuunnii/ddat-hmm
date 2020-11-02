import {createContext} from 'react';

const LoginContext = createContext({
    user: {id:"", token:""},
    loginAccess:(user: {id:string, token: string})=>{}
})

export default LoginContext;