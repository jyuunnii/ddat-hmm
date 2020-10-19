import React from 'react';
import styled from 'styled-components';
import './index.css';


const MWLContainer = styled.div`
    display: flex;
    width: 328px;
    overflow-y: hidden;
    padding-left: 32px;
`;

const MWLCWrapper = styled.div`
    display: flex;
    min-width: 50px;
    min-height: 90px;
    padding-right: 24px;
    flex-direction: column;
    justify-content: center;
`;


type MainWhoListProps = {
    friendsList: string[];
}

const MainWhoList = ({friendsList}: MainWhoListProps) => {
    return(
        <MWLContainer>
        {friendsList.map((friend, index) => {
            return(
            <MWLCWrapper key={index}>
                <div className="friend-image"></div>
                <div className="friend-name">{friend}</div>
            </MWLCWrapper>
            )
        })}
        </MWLContainer>
    )
}

export default MainWhoList;