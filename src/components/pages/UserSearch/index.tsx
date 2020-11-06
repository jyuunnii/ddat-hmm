import React, { useEffect, useState } from 'react';
import { Friends, MainContainer, MainScale, MainWrapper, UserPublic } from '../../../utils';
import { followByName, getAllUsersByName, getFriendsById, unfollowByName } from '../../api';
import SearchBox from '../../Components/SearchBox';
import SearchResult from '../../Components/SearchResult';
import SearchTitle from '../../Components/SearchTitle';

import './index.css';

type SearchPageProps = {
    user: {id: number, token: string}
}

const UserSearch = (props: SearchPageProps) => {
    const [userData, setUserData] = useState<UserPublic>({id:0, name:"", friends:{follower:[], following:[]}});
    const [searchResults, setSearchResults] = useState<UserPublic[]>([]);
    const [oldFriends, setOldFriends] = useState<Friends>({following: [], follower:[]});
    const [target, setTarget] = useState<string>("");
    const [newfriendsList, setNewFriendsList] = useState<string[]>([]);
    const [deletedFriends, setDeletedFriends] = useState<string[]>([]);
    
    useEffect(() => {    
        async function fetchData(){
            if(props.user.id > 0){
                await getFriendsById(props.user.id, props.user.token, setUserData, setOldFriends);  
            }
            await getAllUsersByName(target, setSearchResults);
        }
        fetchData();
    }, [props.user.id, props.user.token, target])

   
    const onCreate = async (data: string) => {
        await setTarget(data);
    }

    const updateFriends = async (userName: string, friendstate: boolean) => {
        if(!friendstate){
            await setNewFriendsList([
                ...newfriendsList,
                userName
            ]);
            await followByName(props.user.id, props.user.token, userName)
        }else{
            await setDeletedFriends([
                ...deletedFriends,
                userName
            ])
            await unfollowByName(props.user.id, props.user.token, userName)
        }
    }

    const targetOldFriends: UserPublic[] = oldFriends.following.filter(user => user.name === target);
    const filteredResults: UserPublic[] = searchResults.filter(user => (user.name !== userData.name) && !(targetOldFriends.some( f => f.name === user.name)));

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
                    <SearchResult searchTarget={target} updateFriends={updateFriends} searchResults={filteredResults} oldFriendsList={targetOldFriends}/>
                </MainWrapper>
            </MainContainer>
        </MainScale>
    )
}

export default UserSearch;