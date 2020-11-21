import { serverUrl, initialProfile } from "../../utils/Const";

export const getUserPublicById = async (id: number, token: string)=>{
    let user = await fetch(serverUrl+`/user/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "GET"
    }).then(response => response.json())
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => JSON.parse(dataStr))
    .then(data => {return data})
    .catch((error) => console.log("Error: ", error));

    return user;
}

export const getUserById = async(id: number, token: string) => {
    let user = await fetch(serverUrl+`/user/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "GET"
    }).then(response => response.json())
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => JSON.parse(dataStr))
    .then(data => {return data})
    .catch((error) => console.log("Error: ", error));

    let messages = await fetch(serverUrl+`/message/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "GET"
    }).then(response => response.json())
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => JSON.parse(dataStr))
    .then(data => {return data})
    .catch((error) => console.log("Error: ", error));

    let friends = await fetch(serverUrl+`/follow/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "GET"
    }).then(response => response.json())
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => JSON.parse(dataStr))
    .then(data => {return data})
    .catch((error) => console.log("Error: ", error));


    return {user: user, messages: messages, friends: friends};
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

export const getAllUsersByName = async(name: string)=>{
    let searchResults = await fetch(serverUrl+`/user/name?name=${name}`, {headers:{
        "Content-Type": "application/json"
    },
    method: "GET"
    }).then(response => response.json())
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => JSON.parse(dataStr))
    .then(data => {return data})
    .catch((error) => console.log("Error: ", error));

    return searchResults;
}

export const getFriendsById = async(id: number, token: string) => {
    let user = await fetch(serverUrl+`/user/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "GET"
    }).then(response => response.json())
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => JSON.parse(dataStr))
    .then(data => {return data})
    .catch((error) => console.log("Error: ", error));

    let friends = await fetch(serverUrl+`/follow/${id}`, {
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        method: "GET"
    }).then(response => response.json())
    .then(dataJSON => JSON.stringify(dataJSON))
    .then(dataStr => JSON.parse(dataStr))
    .then(data => {return data})
    .catch((error) => console.log("Error: ", error));

    return {user: user, friends: friends};
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

export const login = async(data: { email: string; password: string }) => {
    let token = await fetch(serverUrl+'/auth/login', {
        headers:{
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data) 
    }).then(response => response.json())
    .then(data => {return data})
    .catch((error) => console.log("Error: ", error));

    return token;
}

export const signup = async (data: { name: string; email: string; password: string }) => {
    await fetch(serverUrl+'/user', {
        headers:{
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
            profileImageUri: initialProfile,
            comment: ""
        })
    }).then(response => console.log(response.ok))
    .catch((error) => console.log("Error: ", error));
}