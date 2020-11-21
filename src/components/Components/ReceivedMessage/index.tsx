import React from 'react';
import { RecordBox, RecordWrapper } from '../../../utils/Styled';
import { MessageRecord } from '../../../utils/Type';
import './index.css';


type ReceivedMessageProps = {
    record: MessageRecord;
    count: number;
    color: string;
}

const ReceivedMessage = ({record, count, color}: ReceivedMessageProps) => {
    return(
        <RecordWrapper>
        <RecordBox>
            <div className="received-count" style={{backgroundColor:color}}><div className="received-count-number">{count}</div></div>
            <div className="sender">{record.sender}</div>
            <div className="received-content">{record.content}</div>
        </RecordBox>
        </RecordWrapper>
 
    )
}

export default ReceivedMessage;