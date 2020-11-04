import React, { useEffect, useState } from 'react'
import { MainScale, MainContainer, MainWrapper, MessageRecord, UserPublic } from '../../../utils';
import { getUserById } from '../../api';
import MainMessage from '../../Components/MainMessage';
import MainRecords from '../../Components/MainRecords';
import MainTitle from '../../Components/MainTitle';
import MainWhoList from '../../Components/MainWhoList';
import './index.css';

type MainPageProps = {
    user: {id: number, token: string}
}

const MainPage = (props: MainPageProps) => {
    const [userData, setUserData] = useState<UserPublic>();
    const [userMessages, setUserMessages] = useState<MessageRecord[]>();

    useEffect(() => {    
        getUserById(props.user.id, props.user.token, setUserData, setUserMessages);  
    }, [props])

    if(userData?.id === undefined){
        return(
            <div>로그인이 필요합니다.</div>
        )
    }
        
    return(
        <MainScale>
        <MainContainer>
            <MainWrapper className="main-title-wrapper">
                <MainTitle user={userData}/>
            </MainWrapper>
            <MainWrapper className="main-who-wrapper">
                <MainWhoList friendsList={userData.friends}/>
            </MainWrapper>
            <MainWrapper className="main-msg-wrapper">
                <MainMessage user={userData}/>
            </MainWrapper>
            <MainWrapper>
            <MainRecords records={userMessages}/>
        </MainWrapper>
        </MainContainer>
    </MainScale>
    )
    
}

export default MainPage;