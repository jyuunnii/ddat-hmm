import React from 'react';
import { HomeScale, MainContainer, MainWrapper } from '../../../utils';
import Storage from '../../sections/Storage';
import './index.css';

const StoragePage = () => {
    return(
        <HomeScale>
            <MainContainer style={{position: "relative"}}>
                <MainWrapper className="storage-title-wrapper">
                    <div className="storage-title">My storage</div>
                    <div className="storage-subtitle">touch love make love</div>
                </MainWrapper>
                <MainWrapper className="storage-content-wrapper">
                    <Storage/>
                </MainWrapper>
            </MainContainer>
        </HomeScale>
    )
}

export default StoragePage;