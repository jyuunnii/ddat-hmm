import React, { useEffect, useState } from 'react';
import { Friends, initialFriends, initialUser, MainContainer, MainScale, MainWrapper, UserPublic } from '../../../utils';
import { followByName, getAllUsersByName, getFriendsById, unfollowByName } from '../../api';
import SearchBox from '../../Components/SearchBox';
import SearchResult from '../../Components/SearchResult';
import SearchTitle from '../../Components/SearchTitle';

import './index.css';

type SearchPageProps = {
    userToken: {id: number, token: string}
}

const UserSearch = (props: SearchPageProps) => {
    const [userData, setUserData] = useState<UserPublic>(initialUser);
    const [searchResults, setSearchResults] = useState<UserPublic[]>([]);
    const [oldFriends, setOldFriends] = useState<Friends>(initialFriends);
    const [target, setTarget] = useState<string>("");
    const [newfriendsList, setNewFriendsList] = useState<string[]>([]);
    const [deletedFriends, setDeletedFriends] = useState<string[]>([]);
    
    useEffect(() => {    
        async function fetchData(){
            if(props.userToken.id > 0){
                await getFriendsById(props.userToken.id, props.userToken.token).then(data => {
                    setUserData(data.user);
                    setOldFriends(data.friends);  
                });  
            }
            await getAllUsersByName(target).then(data => setSearchResults(data));
        }
        fetchData();
    }, [props.userToken.id, props.userToken.token, target])

   
    const onCreate = async (data: string) => {
        await setTarget(data);
    }

    const updateFriends = async (userName: string, friendstate: boolean) => {
        if(!friendstate){
            await setNewFriendsList([
                ...newfriendsList,
                userName
            ]);
            await followByName(props.userToken.id, props.userToken.token, userName)
        }else{
            await setDeletedFriends([
                ...deletedFriends,
                userName
            ])
            await unfollowByName(props.userToken.id, props.userToken.token, userName)
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