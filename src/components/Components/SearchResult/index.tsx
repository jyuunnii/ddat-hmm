import React from 'react';
import styled from 'styled-components';
import { UserProfile } from '../../../utils';
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
    updateFriends: (user: string, friendstate: boolean) => void;
    searchResults: UserProfile[] | undefined;
    oldFriendsList: UserProfile[];
}

const SearchResult = ({searchTarget, updateFriends, searchResults, oldFriendsList}: SearchResultProps) => {  
    if(! Array.isArray(searchResults) || !searchResults.length){
        return(
            <SContainer>
                 <div className="search-result-header">검색결과</div>
                 <div className="no-search-result">{searchTarget}&nbsp;에 대한 검색결과가 없습니다.</div>
            </SContainer>    
        )
    }

    const selectUser = (userName: string, friendstate: boolean) => {
        updateFriends(userName, friendstate);
    }

    return(
        <SContainer>
            <div className="search-result-header">검색결과</div>
            <SWrapper>
            {oldFriendsList.map((user)=>{
                return(<SearchResultOneRow key={user.name} user={user} selectUser={selectUser} isFriend={true}/>)
            })}
            {searchResults?.map((user)=>{     
                return(<SearchResultOneRow key={user.name} user={user} selectUser={selectUser} isFriend={false}/>)
            })}
            </SWrapper> 
        </SContainer>
    )
}

export default SearchResult;