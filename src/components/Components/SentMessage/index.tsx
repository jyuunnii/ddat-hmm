import React, { useEffect, useState } from 'react';
import { MessageRecord, RecordBox, RecordWrapper } from '../../../utils';
import { getReceiverNameById } from '../../api';
import './index.css';

type SentMessageProps = {
    record: MessageRecord;
    id: number;
    token: string;
}

const SentMessage = ({record, id, token}: SentMessageProps) => {
    const [receiverName, setReceiverName] = useState<string>("");  

    useEffect(() => {
        getReceiverNameById(id, token, record.receiver, setReceiverName);
    }, [id, token, record])

    return(
        <RecordWrapper>
        <RecordBox>
        <div className="sent-count"><div className="received-count-number">{record.count}</div></div>
            <div className="receiver">{receiverName}</div>
            <div className="sent-content">{record.content}</div>
        </RecordBox>
        </RecordWrapper>
    )
}

export default SentMessage;