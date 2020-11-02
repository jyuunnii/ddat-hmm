import React from 'react'
import LoginContext from '../../../context';
import { MainScale, MainContainer, MainWrapper, MessageRecord } from '../../../utils';
import MainMessage from '../../Components/MainMessage';
import MainRecords from '../../Components/MainRecords';
import MainTitle from '../../Components/MainTitle';
import MainWhoList from '../../Components/MainWhoList';
import './index.css';


const testList = ['userefefefefeef1', 'user2', 'user3', 'user4', 'user5'];
const testUser = {
    id: 1,
    name: "Jynn",
    profileImageUri: "/images/person.png",
    friends:{friends:[]}
}

const testMsgRecords: MessageRecord[] = [
    {user: {id: 1, name: "userdfdfdfdfdf1", friends:{friends:[]}}, message:"사랑해", count: 7, type: false},
    {user: {id: 2, name: "user2", friends:{friends:[]}}, message:"사랑해", count: 10, type: false},
    {user: {id: 3, name: "user3", friends:{friends:[]}}, message:"고마워ㅓㅓ", count: 3, type: false},
    {user: {id: 4, name: "user4", friends:{friends:[]}}, message:"사랑해", count: 5, type: true},
    {user: {id: 5, name: "user5", friends:{friends:[]}}, message:"사랑해", count: 7, type: true}
]

const MainPage = () => {
    return(
        <LoginContext.Consumer>
        {loginData => {    

            return(
                <MainScale>
                <MainContainer>
                    <MainWrapper className="main-title-wrapper">
                        <MainTitle user={testUser}/>
                    </MainWrapper>
                    <MainWrapper className="main-who-wrapper">
                        <MainWhoList friendsList={testList}/>
                    </MainWrapper>
                    <MainWrapper className="main-msg-wrapper">
                        <MainMessage user={testUser}/>
                    </MainWrapper>
                    <MainWrapper>
                    <MainRecords records={testMsgRecords}/>
                </MainWrapper>
                </MainContainer>
            </MainScale>
            )}}
        </LoginContext.Consumer>
    )
}

export default MainPage;