import React, { useEffect, useState } from 'react'
import { MainScale, MainContainer, MainWrapper, MessageRecord, UserPublic, Friends } from '../../../utils';
import { getUserById } from '../../api';
import MainMessage from '../../Components/MainMessage';
import MainRecords from '../../Components/MainRecords';
import MainTitle from '../../Components/MainTitle';
import MainWhoList from '../../Components/MainWhoList';
import Enter from '../Enter';
import './index.css';

type MainPageProps = {
    user: {id: number, token: string}
}

const MainPage = (props: MainPageProps) => {
    const [userData, setUserData] = useState<UserPublic>({id:0, name:"", friends:{follower:[], following:[]}});
    const [userMessages, setUserMessages] = useState<{sent: MessageRecord[], received: MessageRecord[]}>({sent: [], received: []});
    const [userFriends, setUserFriends] = useState<Friends>({following: [], follower:[]});

    useEffect(() => {    
        if(props.user.id > 0){
            getUserById(props.user.id, props.user.token, setUserData, setUserMessages, setUserFriends);  
        }
    }, [props.user.id, props.user.token])

   
    if(props.user.id === 0 || userData.id === 0){
        return(<Enter/>)
    }

    return(
        <MainScale>
        <MainContainer>
            <MainWrapper className="main-title-wrapper">
                <MainTitle user={userData}/>
            </MainWrapper>
            <MainWrapper className="main-who-wrapper">
                <MainWhoList friends={userFriends}/>
            </MainWrapper>
            <MainWrapper className="main-msg-wrapper">
                <MainMessage user={userData} friends={userFriends}/>
            </MainWrapper>
            <MainWrapper>
            <MainRecords records={userMessages}/>
        </MainWrapper>
        </MainContainer>
    </MainScale>
    )
}

export default MainPage;