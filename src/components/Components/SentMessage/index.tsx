import React from 'react';
import { MessageRecord, RecordBox, RecordWrapper } from '../../../utils';

import './index.css';

type SentMessageProps = {
    record: MessageRecord;
    count: number
}

const SentMessage = ({record, count}: SentMessageProps) => {
    return(
        <RecordWrapper>
        <RecordBox>
            <div className="sent-count"><div className="received-count-number">{count}</div></div>
            <div className="receiver">{record.receiver}</div>
            <div className="sent-content">{record.content}</div>
        </RecordBox>
        </RecordWrapper>
    )
}

export default SentMessage;