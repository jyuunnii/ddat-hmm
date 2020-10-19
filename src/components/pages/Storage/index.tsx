import React from 'react';
import { MainContainer, MainScale, MainWrapper } from '../../../utils';
import Storage from '../../Components/Storage';
import './index.css';

const StoragePage = () => {
    return(
        <MainScale>
            <MainContainer >
                <MainWrapper className="storage-title-wrapper">
                    <div className="storage-title">My storage</div>
                    <div className="storage-subtitle">touch love make love</div>
                </MainWrapper>
                <MainWrapper>
                    <Storage/>
                </MainWrapper>
            </MainContainer>
        </MainScale>
    )
}

export default StoragePage;