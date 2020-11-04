import React, { useState } from 'react';
import styled from 'styled-components';
import LoginContext from '../../../context';
import { MainContainer, MessageRecord } from '../../../utils';
import ReceivedMessage from '../ReceivedMessage';
import SentMessage from '../SentMessage';
import './index.css';

const RWrapper = styled.div`
    width: 240px;
    margin: 0 auto;
`;

type MainRecordsProps = {
    records: MessageRecord[] | undefined;
}

const countColors = ["#F5C851", "#9ED5E7", "#FC929E"];

const MainRecords = ({records}: MainRecordsProps) => {
    const [isSentTab, setSentTab] = useState<boolean>(false);

    const changeTab = (receivedTab: boolean) => {
        if(receivedTab){
            setSentTab(false);
        }else{
            setSentTab(true);
        }
    }

    const calculateCount = (type: boolean) => {
        let totalCount = 0;
        records?.filter(record=> record.type === type).forEach((record)=>{
            totalCount += record.count;
        })
        return totalCount;
    }   

    return(  
        <LoginContext.Consumer>
            {loginUser => {
                return(
                    <MainContainer>
                    <RWrapper className="record-button">
                        <button onClick={()=>changeTab(false)} style={{borderColor: isSentTab? "#292929": "#dbdbdb"}} className="sent-button">
                            Sent &nbsp; {calculateCount(true)}</button>
                        <button onClick={()=>changeTab(true)} style={{borderColor: isSentTab? "#dbdbdb": "#292929"}} className="received-button">
                            Received &nbsp; {calculateCount(false)}</button>
                    </RWrapper>
                    <RWrapper className="today-date">today</RWrapper>
                    <RWrapper>
                        {records?.filter(record=> record.type === isSentTab).sort((a,b)=>{
                            return a.count > b.count? -1 : a.count < b.count? 1 : 0;
                        }).map((record, index)=>{
                            if(!isSentTab){
                                return(<ReceivedMessage key={index} record={record} color={countColors[index]}/>)
                            }else{
                                return(<SentMessage key={index} record={record} id={loginUser.user.id} token={loginUser.user.token}/>)
                            }
                            })
                        }
                    </RWrapper>
                </MainContainer>
                )
            }}
        </LoginContext.Consumer>  
    )
}

export default MainRecords;