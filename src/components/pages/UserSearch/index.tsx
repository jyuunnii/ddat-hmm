import React, { useEffect, useState } from 'react';
import { MainContainer, MainScale, MainWrapper, myFriend, User } from '../../../utils';
import SearchBox from '../../Components/SearchBox';
import SearchResult from '../../Components/SearchResult';
import SearchTitle from '../../Components/SearchTitle';
import './index.css';

// 임시 친구목록 데이터 (내 정보에서 불러오기) ==> 최상위 컴포넌트로 이동 ==> updateFriends 를 통해 현재 컴포넌트에서 새로운 친구목록 관리 => 상위 컴포넌트에 전달하여 상태관리
const oldFriendsList: myFriend[] = [{name: "test1", id: 1}, {name: "test2"}];

// 임시 검색 결과 데이터 (전체 유저에서 이름 검색)
const apiResults: User[] = [{name: "test1", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
{name: "test2", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
{name: "test3", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
{name: "test4", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"},
{name: "test5", comment:"안녕하세요:)안녕하세요:)안녕하세요:)안녕하세요:)"}];



const UserSearch = () => {
    const [target, setTarget] = useState<string>("");
    const onCreate = (data: string) => {
        setTarget(data);
    }

    const [newfriendsList, setNewFriendsList] = useState<string[]>([]);
    const updateFriends = (user: string, friendstate: boolean) => {
        if(!friendstate){
            setNewFriendsList([
                ...newfriendsList,
                user
            ]); 
        }else{
            const results: string[] = newfriendsList.filter(friend => !(friend === user));
            setNewFriendsList(results);
        }
    }

    const filteredResults: User[] | undefined = apiResults.filter(user => !(oldFriendsList.some(friend=> friend.name === user.name)));
   
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
                    <SearchResult searchTarget={target} updateFriends={updateFriends} searchResults={filteredResults} oldFriendsList={oldFriendsList}/>
                </MainWrapper>
            </MainContainer>
        </MainScale>
    )
}

export default UserSearch;