import { Friends, initialProfile, MessageRecord, serverUrl, UserPublic } from "../../utils";

export const getUserPublicById = async (id: number, token: string, setUserData:(user:UserPublic)=>void)=>{
    await fetch(serverUrl+`/user/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "GET"
    }).then(response => response.json())
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => JSON.parse(dataStr))
    .then(data => setUserData(data))
    .catch((error) => console.log("Error: ", error));
}

export const getUserById = async(id: number, token: string, 
                                setUserData:(user: UserPublic)=>void, 
                                setUserMessages:(msg: {sent: MessageRecord[], received: MessageRecord[]})=>void,
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

export const updateUserById = async(id: number, token: string, name: string, comment: string|undefined, profileImageUri: string|undefined) => {
    await fetch(serverUrl+`/user/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "PATCH",
        body: JSON.stringify({
            name: name,
            comment: comment,
            profileImageUri: profileImageUri
        })
    }).then(response => console.log(response.ok))
    .catch((error) => console.log("Error: ", error));
}

export const getAllUsersByName = async(name: string, setSearchResults: (users: UserPublic[])=>void)=>{
    await fetch(serverUrl+`/user/name?name=${name}`, {headers:{
        "Content-Type": "application/json"
    },
    method: "GET"
    }).then(response => response.json())
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => JSON.parse(dataStr))
    .then(data => setSearchResults(data))
    .catch((error) => console.log("Error: ", error));
}

export const getFriendsById = async(id: number, token: string, 
                                setUserData:(user: UserPublic)=>void, 
                                setUserFriends:(friends: Friends)=>void) => {
    Promise.all([
        await fetch(serverUrl+`/user/${id}`, {
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
    ]).then(responses =>  {
        return Promise.all(responses.map((response) => {
            return response.json();
        }));
    })
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => JSON.parse(dataStr))
    .then(data => {
        setUserData(data[0]);
        setUserFriends(data[1]);
    })
    .catch((error) => console.log("Error: ", error));
}

export const followByName = async(id: number, token: string, name: string) => {
    await fetch(serverUrl+`/follow/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "POST",
        body: JSON.stringify({followingName: name})
    }).then(response => console.log(response.ok))
    .catch((error) => console.log("Error: ", error));
}

export const unfollowByName = async(id: number, token: string, name: string) => {
    await fetch(serverUrl+`/follow/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "DELETE",
        body: JSON.stringify({followingName: name})
    }).then(response => console.log(response.ok))
    .catch((error) => console.log("Error: ", error));
}

export const sendMessage = async(id: number, token: string, targetUserId: number, content: string) => {
    await fetch(serverUrl+`/message/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "POST",
        body: JSON.stringify({
            targetUserId: targetUserId,
            content: content
        }) 
    }).then(response => console.log(response.ok))
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
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
            profileImageUri: initialProfile
        })
    }).then(response => console.log(response.ok))
    .catch((error) => console.log("Error: ", error));
}