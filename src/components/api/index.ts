import { serverUrl } from "../../utils";


export const accessUserInfo = async(userId: number, token: string) => {
    await fetch(serverUrl+`/user/:${userId}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "GET",
    })
    .then(response => {
        return response.json()})
    .catch((error) => console.log("Error: ", error));
}

export const login = async(data: { email: string; password: string }) => {
    await fetch(serverUrl+'/auth/login', {
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data) 
    })
    .then(response => {
        return  response})
    .catch((error) => console.log("Error: ", error));
}

export const signup = async (data: { name: string; email: string; password: string }) => {
    await fetch(serverUrl+'/user', {
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(response => console.log(response))
    .catch((error) => console.log("Error: ", error));
}