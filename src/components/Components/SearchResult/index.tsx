import React from 'react';
import styled from 'styled-components';
import { User } from '../../../utils';
import SearchResultOneRow from '../SearchResultOneRow';
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

type SearchResultProps  = {
    searchTarget: string;
    addNewFriends: (user: string) => void;
    searchResults: User[] | undefined;
}

const SearchResult = ({searchTarget, addNewFriends, searchResults}: SearchResultProps) => {  
    if(! Array.isArray(searchResults) || !searchResults.length){
        return(
            <SContainer>
                 <div className="search-result-header">검색결과</div>
                 <div className="no-search-result">{searchTarget}&nbsp;에 대한 검색결과가 없습니다.</div>
            </SContainer>    
        )
    }

    const addFriend = (userName: string) => {
        addNewFriends(userName);
    }
    const selectUser = (userName: string) => {
        addFriend(userName);
    }

    return(
        <SContainer>
            <div className="search-result-header">검색결과</div>
            <SWrapper>
            {searchResults?.map((user)=>{     
                return(     
                  <SearchResultOneRow key={user.name} user={user} selectUser={selectUser}/>
                )
            })}
            </SWrapper> 
        </SContainer>
    )
}

export default SearchResult;