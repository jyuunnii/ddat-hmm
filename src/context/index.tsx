import {createContext} from 'react';

const LoginContext = createContext({
    userToken: {id: 0, token:""},
    loginAccess:(data: {id:number, token: string})=>{}
})

export default LoginContext;