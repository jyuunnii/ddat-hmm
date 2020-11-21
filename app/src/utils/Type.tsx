export type UserPrivate = {
    id: number;
    name: string;
    email: string;
    password: string;
    profileImageUri : string;
    backgroundImageUri ?: string;
    comment ?: string;
    friends: Friends;
    messages: {
        sent: MessageRecord[],
        received: MessageRecord[]
    }
}

export type UserPublic = {
    id: number;
    name: string;
    profileImageUri : string;
    comment ?: string;
    friends: Friends;
}

export type Friends = {
    following: UserPublic[];
    follower: UserPublic[];
}

export type MessageRecord = {
    receiver: string;
    sender: string;
    content: string;
}