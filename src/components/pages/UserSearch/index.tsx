import React, { useEffect, useState } from 'react';
import { MainContainer, MainScale, MainWrapper, myFriend, User } from '../../../utils';
import SearchBox from '../../Components/SearchBox';
import SearchResult from '../../Components/SearchResult';
import SearchTitle from '../../Components/SearchTitle';
import './index.css';

const UserSearch = () => {
    const [target, setTarget] = useState<string>("");
    const onCreate = (data: string) => {
        setTarget(data);
    }

    const [newfriends, setNewFriends] = useState<string[]>([]);
    const addNewFriends = (user: string) => {
        setNewFriends([
            ...newfriends,
            user
        ]);
    }

    // 임시 친구목록 데이터 (내 정보에서 불러오기) ==> 최상위 컴포넌트로 이동 setFriends랑 연동
    const myFriendsList: myFriend[] = [{name: "test1", id: 1}, {name: "test2"}];

    // 임시 검색 결과 데이터 (전체 유저에서 이름 검색)
    const apiResults: User[] = [{name: "test1", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
    {name: "test2", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
    {name: "test3", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
    {name: "test4", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
    {name: "test5", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"}];

    const filteredResults: User[] | undefined = apiResults.filter(user => !(myFriendsList.some(friend=> friend.name === user.name)));
   
    useEffect(()=>{
        //console.log(target);
        //TODO: fetch POST => target => GET user info
    })
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
                    <SearchResult searchTarget={target} addNewFriends={addNewFriends} searchResults={filteredResults}/>
                </MainWrapper>
            </MainContainer>
        </MainScale>
    )
}

export default UserSearch;