import React from 'react';
import { MessageRecord, RecordBox, RecordWrapper } from '../../../utils';

import './index.css';

type SentMessageProps = {
    record: MessageRecord;
}

const SentMessage = ({record}: SentMessageProps) => {
    return(
        <RecordWrapper>
        <RecordBox>
        <div className="sent-count"><div className="received-count-number">{record.count}</div></div>
            <div className="receiver">{record.receiver}</div>
            <div className="sent-content">{record.content}</div>
        </RecordBox>
        </RecordWrapper>
    )
}

export default SentMessage;