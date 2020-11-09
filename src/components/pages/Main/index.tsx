import React, { useEffect, useState } from 'react'
import { MainScale, MainContainer, MainWrapper, MessageRecord, UserPublic, Friends, initialUser, initialFriends, initialTarget, initialMessages } from '../../../utils';
import { getUserById } from '../../api';
import MainMessage from '../../Components/MainMessage';
import MainRecords from '../../Components/MainRecords';
import MainTitle from '../../Components/MainTitle';
import MainWhoList from '../../Components/MainWhoList';
import Intro from '../Intro';
import './index.css';

type MainPageProps = {
    user: {id: number, token: string}
}

const MainPage = (props: MainPageProps) => {
    const [userData, setUserData] = useState<UserPublic>(initialUser);
    const [userMessages, setUserMessages] = useState<{sent: MessageRecord[], received: MessageRecord[]}>(initialMessages);
    const [userFriends, setUserFriends] = useState<Friends>(initialFriends);
    const [target, setTarget] = useState<UserPublic>(initialTarget);

    useEffect(() => {    
        if(props.user.id > 0){
            getUserById(props.user.id, props.user.token, setUserData, setUserMessages, setUserFriends);  
        }
    }, [props.user.id, props.user.token])

   
    if(props.user.id === 0 || userData.id === 0){
        return(<Intro/>)
    }

    return(
        <MainScale>
        <MainContainer>
            <MainWrapper className="main-title-wrapper">
                <MainTitle user={userData}/>
            </MainWrapper>
            <MainWrapper className="main-who-wrapper">
                <MainWhoList friends={userFriends} setTarget={setTarget}/>
            </MainWrapper>
            <MainWrapper className="main-msg-wrapper">
                <h6>Dear {target.name}</h6>
                <MainMessage user={props.user} receiver={target}/>
            </MainWrapper>
            <MainWrapper>
            <MainRecords records={userMessages}/>
        </MainWrapper>
        </MainContainer>
        </MainScale>
    )
}

export default MainPage;