import React, { useState } from 'react';
import { MainContainer, MainScale, MainWrapper } from '../../../utils';
import SearchBox from '../../Components/SearchBox';
import SearchResult from '../../Components/SearchResult';
import SearchTitle from '../../Components/SearchTitle';
import './index.css';

const UserSearch = () => {
    const [target, setTarget] = useState<string>("");
    const onCreate = (data: string) => {
        setTarget(data);
    }
    
    return(
        <MainScale>
            <MainContainer>
                <MainWrapper className="search-title-wrapper">
                    <SearchTitle/>
                </MainWrapper>
                <MainWrapper className="search-box-wrapper">
                    <SearchBox onCreate={onCreate}/>
                </MainWrapper>
                <MainWrapper className="search-result-wrapper">
                    <SearchResult searchTarget={target}/>
                </MainWrapper>
            </MainContainer>
        </MainScale>
    )
}

export default UserSearch;