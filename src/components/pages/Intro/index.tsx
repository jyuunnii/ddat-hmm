import React, { useState } from 'react';
import { initialTarget, initialUser, MainContainer, MainScale, MainWrapper, UserPublic } from '../../../utils';
import MainMessage from '../../Components/MainMessage';
import MainRecords from '../../Components/MainRecords';
import MainTitle from '../../Components/MainTitle';
import MainWhoList from '../../Components/MainWhoList';

const friendsPreview = {
    following:[{id:1, name:"Jynn", profileImageUri:"/images/girl1.png", friends:{following:[],follower:[]}},
    {id:2, name:"Dan", profileImageUri:"/images/boy1.png", friends:{following:[],follower:[]}},
    {id:3, name:"Marie", profileImageUri:"/images/girl2.png", friends:{following:[],follower:[]}}],
    follower:[]
}

const messagesPreview = {
    sent:[{receiver:"Jynn", sender:"admin", content:"사랑해!"},{receiver:"Marie", sender:"admin", content:"good morning :)"}],
    received:[{receiver:"admin", sender:"Dan", content:"love u"},{receiver:"admin", sender:"Dan", content:"love"},{ receiver:"admin", sender:"Jennie", content:"xoxo"},{ receiver:"admin", sender:"Rose", content:"보고싶어"}]
}

const Intro = () => {
    const [enterTarget, setEnterTarget] = useState<UserPublic>(initialTarget);
    
    return(
        <MainScale>
        <MainContainer>
            <MainWrapper className="main-title-wrapper">
                <MainTitle user={initialUser}/>
            </MainWrapper>
            <MainWrapper className="main-who-wrapper">
                <MainWhoList friends={friendsPreview} setTarget={setEnterTarget}/>
            </MainWrapper>
            <MainWrapper className="main-msg-wrapper">
                <h6>Dear {enterTarget.name}</h6>
                <MainMessage user={{id:0, token:""}} receiver={enterTarget}/>
            </MainWrapper>
            <MainWrapper>
            <MainRecords records={messagesPreview}/>
        </MainWrapper>
        </MainContainer>
        </MainScale>
    )
}

export default Intro;