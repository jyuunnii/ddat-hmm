import {createContext} from 'react';

const LoginContext = createContext({
    user: {id: 0, token:""},
    loginAccess:(user: {id:number, token: string})=>{}
})

export default LoginContext;