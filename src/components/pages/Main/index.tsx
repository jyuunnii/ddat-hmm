import React from 'react'
import { MainScale, MainContainer, MainWrapper } from '../../../utils';
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
                    <MainRecords/>
                </MainWrapper>
            </MainContainer>
        </MainScale>
    )
}

export default MainPage;