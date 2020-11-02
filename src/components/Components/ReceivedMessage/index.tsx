import React from 'react';
import { MessageRecord, RecordBox, RecordWrapper } from '../../../utils';
import './index.css';


type ReceivedMessageProps = {
    record: MessageRecord;
    color: string
}

const ReceivedMessage = ({record, color}: ReceivedMessageProps) => {
    return(
        <RecordWrapper>
        <RecordBox>
            <div className="received-count" style={{backgroundColor:color}}><div className="received-count-number">{record.count}</div></div>
            <div className="sender">{record.user.name}</div>
            <div className="received-content">{record.message}</div>
        </RecordBox>
        </RecordWrapper>
 
    )
}

export default ReceivedMessage;