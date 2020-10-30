import React from 'react'
import { MainScale, MainContainer, MainWrapper, MessageRecord } from '../../../utils';
import MainMessage from '../../Components/MainMessage';
import MainRecords from '../../Components/MainRecords';
import MainTitle from '../../Components/MainTitle';
import MainWhoList from '../../Components/MainWhoList';
import './index.css';


const testList = ['user1', 'user2', 'user3', 'user4', 'user5'];
const testUser = {
    name: "Jynn",
    imageUri: "/images/person.png" 
}

const testMsgRecords: MessageRecord[] = [
    {user: {name: "user1"}, message:"사랑해", count: 7, type: false},
    {user: {name: "user2"}, message:"사랑해", count: 10, type: false},
    {user: {name: "user3"}, message:"고마워ㅓㅓ", count: 3, type: false},
    {user: {name: "user4"}, message:"사랑해", count: 5, type: true},
    {user: {name: "user5"}, message:"사랑해", count: 7, type: true}
]

const MainPage = () => {
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
    )
}

export default MainPage;