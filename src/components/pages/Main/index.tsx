import React from 'react'
import { MainScale, MainContainer, MainWrapper } from '../../../utils';
import MainMessageCreator from '../../sections/MainMessageCreator';
import MainWhoList from '../../sections/MainWhoList';
import './index.css';

const MainPage = () => {
    return(
        <MainScale>
            <MainContainer style={{position: "relative"}}>
                <MainWrapper className="main-title-wrapper">
                    <div className="main-title">Quick touch &amp; <br/> send messages </div>
                    <div className="main-subtitle">touch love make love</div>
                </MainWrapper>
                <MainWrapper className="main-who-wrapper">
                    <MainWhoList/>
                </MainWrapper>
                <MainWrapper className="main-msg-wrapper">
                    <MainMessageCreator/>
                </MainWrapper>
            </MainContainer>
        </MainScale>
    )
}

export default MainPage;