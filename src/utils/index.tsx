import styled from "styled-components";

export const serverUrl = "http://localhost:3001";

export type User = {
    name: string;
    imageUri: string;
}

export const HomeScale = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const MainScale = styled.div`
    width: 100vw;
    height: 90vh;
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