import React from 'react';
import styled from 'styled-components';
import MainWhoListContents from '../MainWhoListContents';
import './index.css';

const MWLContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const testList = ['user1', 'user2', 'user3', 'user4', 'user5'];

const MainWhoList = () => {
    return(
        <MWLContainer>
            <div className="who">Who</div>
            <div>
                <MainWhoListContents friendsList={testList}/>
            </div>
        </MWLContainer>
    )
}

export default MainWhoList;