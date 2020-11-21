import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { MainScale, MainContainer, MainWrapper } from '../../../utils/Styled';
import { initialTarget } from '../../../utils/Const';
import { getUserById } from '../../api';
import MainMessage from '../../Components/MainMessage';
import MainRecords from '../../Components/MainRecords';
import MainTitle from '../../Components/MainTitle';
import MainWhoList from '../../Components/MainWhoList';
import './index.css';
import { UserPublic, MessageRecord, Friends } from '../../../utils/Type';

type MainPageProps = {
    userToken: {id: number, token: string}
}

const MainPage = (props: MainPageProps) => {
    const [userData, setUserData] = useState<UserPublic>();
    const [userMessages, setUserMessages] = useState<{sent: MessageRecord[], received: MessageRecord[]}>();
    const [userFriends, setUserFriends] = useState<Friends>();
    const [target, setTarget] = useState<UserPublic>(initialTarget);
    const location = useHistory();

    useEffect(() => {   
        async function fetchData(){
            if(props.userToken.id > 0){
                await getUserById(props.userToken.id, props.userToken.token).then(data =>{
                    setUserData(data.user);
                    setUserMessages(data.messages);
                    setUserFriends(data.friends);
                });  
            }else{
                location.push("/")
            }
        } 
        fetchData();
    }, [props.userToken.id, props.userToken.token, location])

    return(
        <MainScale>
        <MainContainer>
            <MainWrapper className="main-title-wrapper">
                <MainTitle user={userData}/>
            </MainWrapper>
            <MainWrapper className="main-who-wrapper">
                <h6>Friend List</h6>
                <MainWhoList friends={userFriends} setTarget={setTarget}/>
            </MainWrapper>
            <MainWrapper className="main-msg-wrapper">
                <h6>Send to {target.name}</h6>
                <MainMessage userToken={props.userToken} receiver={target}/>
            </MainWrapper>
            <MainWrapper>
            <MainRecords records={userMessages}/>
        </MainWrapper>
        </MainContainer>
        </MainScale>
    )
}

export default MainPage;