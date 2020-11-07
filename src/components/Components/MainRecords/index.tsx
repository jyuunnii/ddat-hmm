import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainContainer, MessageRecord } from '../../../utils';
import ReceivedMessage from '../ReceivedMessage';
import SentMessage from '../SentMessage';
import './index.css';

const RWrapper = styled.div`
    width: 240px;
    margin: 0 auto;
`;

type MainRecordsProps = {
    records: {sent: MessageRecord[], received: MessageRecord[]};
}

const countColors = ["#F5C851", "#9ED5E7", "#FC929E"];

const MainRecords = ({records}: MainRecordsProps) => {
    const [isSentTab, setSentTab] = useState<boolean>(false);
    const [sentGroupByUser, setSentGroupByUser] = useState<MessageRecord[][]>();
    const [receivedGroupByUser, setReceivedGroupByUser] = useState<MessageRecord[][]>();

    const changeTab = (receivedTab: boolean) => {
        if(receivedTab){
            setSentTab(false);
        }else{
            setSentTab(true);
        }
    }

    useEffect(() => {
      async function classify(){
        const sent =  await groupBy(records.sent, record => record.receiver);
        const received =  await groupBy(records.received, record => record.sender);
        setSentGroupByUser(sent);
        setReceivedGroupByUser(received);
      }
      classify();
    },[records.sent, records.received])

    const calculateCount = (graph: MessageRecord[][] | undefined) => {
        let totalCount = 0;
        graph?.forEach(array => {
            totalCount += array.length;
        })
        return totalCount;
    }   


    function groupBy<K, V>(list: Array<V>, keyGetter: (input: V) => K): V[][]{
        const map = new Map<K, Array<V>>();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
       });
       const graph = Array.from(map.values());
       return graph;
    }

    return(          
        <MainContainer>
            <RWrapper className="record-button">
                <button onClick={()=>changeTab(false)} style={{borderColor: isSentTab? "#292929": "#dbdbdb"}} className="sent-button">
                    Sent &nbsp; {calculateCount(sentGroupByUser)}</button>
                <button onClick={()=>changeTab(true)} style={{borderColor: isSentTab? "#dbdbdb": "#292929"}} className="received-button">
                    Received &nbsp; {calculateCount(receivedGroupByUser)}</button>
            </RWrapper>
            <RWrapper className="today-date">today</RWrapper>
            <RWrapper style={{display: isSentTab? "block" : "none"}}>
                {sentGroupByUser?.map((array, index) => {
                    return(<SentMessage key={index} record={array[0]} count={array.length}/>)                                      
                })}
            </RWrapper>
            <RWrapper style={{display: isSentTab? "none" : "block"}}>
                {receivedGroupByUser?.map((array, index)=>{
                    return(<ReceivedMessage key={index} record={array[0]} count={array.length} color={countColors[index]}/>);
                })}
            </RWrapper>
        </MainContainer>      
    )
}

export default MainRecords;