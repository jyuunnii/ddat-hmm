import React from 'react';
import styled from 'styled-components';
import { UserProfileContainer } from '../../../utils/Styled';
import { UserPublic } from '../../../utils/Type';
import SearchResultOneRow from '../SearchResultOneRow';
import './index.css';


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
    searchResults: UserPublic[];
    oldFriendsList: UserPublic[];
}

const isNoResult = (s: UserPublic[], o: UserPublic[]) => {
    return (! Array.isArray(s) || !s.length )&& (! Array.isArray(o) || !o.length)
}

const SearchResult = ({searchTarget, updateFriends, searchResults, oldFriendsList}: SearchResultProps) => {  
    if(isNoResult(searchResults, oldFriendsList)){
        return(
            <UserProfileContainer>
                 <div className="search-result-header">검색결과</div>
                 <div className="no-search-result">{searchTarget}&nbsp;에 대한 검색결과가 없습니다.</div>
            </UserProfileContainer>    
        )
    }

    const selectUser = (userName: string, friendstate: boolean) => {
        updateFriends(userName, friendstate);
    }

    return(
        <UserProfileContainer>
            <div className="search-result-header">검색결과 <span>{searchResults.length + oldFriendsList.length}</span></div>
            <SWrapper>
            {oldFriendsList.map((user)=>{
                return(<SearchResultOneRow key={user.id} user={user} selectUser={selectUser} isFriend={true}/>)
            })}
            {searchResults.map((user)=>{     
                return(<SearchResultOneRow key={user.id} user={user} selectUser={selectUser} isFriend={false}/>)
            })}
            </SWrapper> 
        </UserProfileContainer>
    )
}

export default SearchResult;