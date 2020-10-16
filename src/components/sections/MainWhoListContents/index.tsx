import React from 'react';
import styled from 'styled-components';
import './index.css';

const MWLCContainer = styled.div`
    display: flex;
    width: 328px;
    overflow-y: hidden;
`;

const MWLCWrapper = styled.div`
    display: flex;
    min-width: 90px;
    min-height: 120px;
    padding-right: 24px;
    flex-direction: column;
    justify-content: center;
`;

type MainWhoListContentsProps = {
    friendsList: string[];
}

const MainWhoListContents = ({friendsList}: MainWhoListContentsProps) => {
    return(
        <MWLCContainer>
        {friendsList.map((friend) => {
            return(
            <MWLCWrapper>
                <div className="friend-image"></div>
                <div className="friend-name">{friend}</div>
            </MWLCWrapper>
            )
        })}
        </MWLCContainer>
    )
}

export default MainWhoListContents;