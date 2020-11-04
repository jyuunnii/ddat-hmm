import { Friends, MessageRecord, serverUrl, UserPublic } from "../../utils";


export const getUserById = async(id: number, token: string, 
                                setUserData:(user: UserPublic)=>void, 
                                setUserMessages:(msg: MessageRecord[])=>void,
                                setUserFriends:(friends: Friends)=>void) => {

    Promise.all([
        await fetch(serverUrl+`/user/${id}`, {
            headers:{
                "Content-Type": "application/json",
                "x-access-token": token
            },
            method: "GET"
        }),
        await fetch(serverUrl+`/message/${id}`, {
            headers:{
                "Content-Type": "application/json",
                "x-access-token": token
            },
            method: "GET"
        }),
        await fetch(serverUrl+`/follow/${id}`, {
            headers:{
                "Content-Type": "application/json",
                "x-access-token": token
            },
            method: "GET"
        })
    ])
    .then(responses =>  {
        return Promise.all(responses.map((response) => {
            return response.json();
        }));
    })
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => JSON.parse(dataStr))
    .then(data => {
        setUserData(data[0]);
        setUserMessages(data[1]);
        setUserFriends(data[2]);
    })
    .catch((error) => console.log("Error: ", error));
}

export const getReceiverNameById = async(id: number, token: string, receiverId: string, setReceiverName:(name: string)=> void) => {
    await fetch(serverUrl+`/user/userName/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "POST",
        body: JSON.stringify({targetId: receiverId})
    }).then(response => response.text())
    .then(data => setReceiverName(data))
    .catch((error) => console.log("Error: ", error));
}

export const login = async(data: { email: string; password: string }, setUser:(user:{id: number, token: string})=>void) => {
    await fetch(serverUrl+'/auth/login', {
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => setUser(JSON.parse(dataStr)))
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