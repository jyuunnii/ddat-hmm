import {createContext} from 'react';

const LoginContext = createContext({
    user: {id:7438, token:""},
    loginAccess:(user: {id:number, token: string})=>{}
})

export default LoginContext;