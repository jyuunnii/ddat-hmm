import { UserPublic, Friends } from "./Type";

export const serverUrl = "https://api.ddat-hmm.inhibitor.io";

export const initialProfile = "/images/person.png";
export const initialBackground = "/images/cover1.png";

export const initialToken = {
    id: 0,
    token: ""
}

export const initialUser: UserPublic = {
    id: 0,
    name: "it's ddat hmm.",
    profileImageUri: initialProfile,
    friends: {following:[], follower:[]}
}

export const initialTarget: UserPublic = {
    id: 0,
    name: "my friend",
    profileImageUri: "/images/cover1.png",
    friends: {following:[], follower:[]}
}

export const initialFriends: Friends = {following:[], follower:[]}

export const initialMessages = {
    sent:[],
    received:[]
}
