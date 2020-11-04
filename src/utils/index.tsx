import styled from "styled-components";

export const serverUrl = "http://localhost:3001";

export type UserPrivate = {
    id: number;
    name: string;
    email: string;
    password: string;
    profileImageUri ?: string;
    backgroundImageUri ?: string;
    comment ?: string;
    friendsList: Friends;
    messages: MessageRecord[];
}

export type UserPublic = {
    id: number;
    name: string;
    profileImageUri ?: string;
    comment ?: string;
    friends: Friends;
}

export type Friends = {
    friends: UserPublic[];
}

export type MessageRecord = {
    receiver: string;
    sender: string;
    content: string;
    count: number;
    type: boolean; // true: sent <=> false: received
    date: Date;
}

export const MainScale = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const LoginContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const LoginFormContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const MainWrapper = styled.div`
    width: 100%;
`;

export const UserProfileContainer = styled.div`
    padding: 12px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const UserProfileBox = styled.div`
    display: flex;
    padding-bottom: 12px;
`;

export const UserProfileTextBox = styled.div`
    padding-left: 18px;
    padding-right: 8px; 
`;

export const RecordWrapper = styled.div`
    padding: 4px 0px;
`;

export const RecordBox = styled.div`
    width: 100%;
    height: 36px;
    background: #FFFFFF;
    border: 1px solid rgba(219, 219, 219, 0.5);
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;

    display: flex;
`;