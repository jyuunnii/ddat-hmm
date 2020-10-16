import React from 'react';
import styled from 'styled-components';

const MMCContainer = styled.div`
    display: flex;
    width: 328px;
    overflow-y: hidden;
`;

const MMCWrapper = styled.div`
    padding-right: 16px;
`;

const MMCBox = styled.div`
    width: 296px;
    height: 296px;
    border: 1px solid #dbdbdb;
`;

const MainMessageCreator = () => {
    return(
        <MMCContainer>
            <MMCWrapper><MMCBox>a</MMCBox></MMCWrapper>
            <MMCWrapper><MMCBox>b</MMCBox></MMCWrapper>
            <MMCWrapper><MMCBox>c</MMCBox></MMCWrapper>
        </MMCContainer>
    )
}

export default MainMessageCreator;