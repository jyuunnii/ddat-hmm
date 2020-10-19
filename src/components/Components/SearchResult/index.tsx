import React from 'react';
import styled from 'styled-components';
import { User } from '../../../utils';
import './index.css';

const SContainer = styled.div`
    padding: 12px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

const SWrapper = styled.div`
    width: 100%;
    height: 330px;
    overflow-y: auto;
    padding-top: 20px;
    padding-bottom: 8px;
`;

const SBox = styled.div`
    display: flex;
    padding-bottom: 12px;
`;

const STextBox = styled.div`
    padding-left: 18px;
    padding-right: 8px; 
`;

type SearchResultProps  = {
    searchTarget: string;
}

const SearchResult = ({searchTarget}: SearchResultProps) => {
    const searchResults: User[] = [{name: "test1", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
    {name: "test2", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
    {name: "test3", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
    {name: "test4", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
    {name: "test5", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"}]

    return(
        <SContainer>
            <div className="search-result-header">검색결과</div>
            <SWrapper>
            {searchResults.map((user) => {
                return(          
                <SBox>
                    <div className="result-user-img"></div>
                    <STextBox>
                        <div className="result-user-name">{user.name}</div>
                        <div className="result-user-comment">{user?.comment}</div>
                    </STextBox>  
                    <div><button className="add-button">Add</button></div>   
                </SBox>
                )
            })}
            </SWrapper> 
        </SContainer>
    )
    // return(
    // <div style={{position: "relative"}}><div className="no-search-result">{searchTarget}&nbsp;에 대한 검색결과가 없습니다.</div></div>
    // )
}

export default SearchResult;