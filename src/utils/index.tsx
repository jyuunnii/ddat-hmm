import styled from "styled-components";

export const serverUrl = "http://localhost:3001";

export type userBasicData = {
    name: string;
    email: string;
    password: string;
}


export const HomeScale = styled.div`
    width: 100vw;
    height: 98vh;
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