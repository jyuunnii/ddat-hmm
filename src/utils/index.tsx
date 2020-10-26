import styled from "styled-components";

export const serverUrl = "http://localhost:3001";

export type UserProfile = {
    name: string;
    imageUri ?: string;
    comment ?: string;
}

export type myFriend = {
    id?: number,
    name: string
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
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const MainWrapper = styled.div`
    width: 100%;
`;