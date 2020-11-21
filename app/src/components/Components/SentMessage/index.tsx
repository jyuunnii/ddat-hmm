import React from 'react';
import { RecordBox, RecordWrapper } from '../../../utils/Styled';
import { MessageRecord } from '../../../utils/Type';

import './index.css';

type SentMessageProps = {
    record: MessageRecord;
    count: number
}

const SentMessage = ({record, count}: SentMessageProps) => {
    return(
        <RecordWrapper>
        <RecordBox>
            <div className="sent-count"><div className="sent-count-number">{count > 999? 999 : count}</div></div>
            <div className="receiver">{record.receiver}</div>
            <div className="sent-content">{record.content}</div>
        </RecordBox>
        </RecordWrapper>
    )
}

export default SentMessage;