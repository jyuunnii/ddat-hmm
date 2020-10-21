import React, { useState } from 'react';
import styled from 'styled-components';
import { User } from '../../../utils';
import './index.css';

const SBox = styled.div`
    display: flex;
    padding-bottom: 12px;
`;

const STextBox = styled.div`
    padding-left: 18px;
    padding-right: 8px; 
`;

type SearchResultOneRowProps = {
    user: User;
    selectUser: (userName: string) => void;
}

const SearchResultOneRow = ({user, selectUser}: SearchResultOneRowProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const changeButtonColor = (current: boolean) => {
        if(current){
            setIsSelected(false);
        }else{
            setIsSelected(true);
        }
    }

    return(
        <SBox>
        <div className="result-user-img"></div>
        <STextBox>
            <div className="result-user-name">{user.name}</div>
            <div className="result-user-comment">{user?.comment}</div>
        </STextBox>  
        <div><input type="button" onClick={()=> {
                        selectUser(user.name);
                        changeButtonColor(isSelected);
                    }} 
                    style={{background: isSelected? "#9ED5E7":"#ffffff", border:  isSelected? "1px solid #fefefe":"1px solid #9ED5E7", color:  isSelected? "#fefefe":"#9ED5E7"}} 
                    value="Add" className="add-button"/>
        </div>   
        </SBox>
    )
}

export default SearchResultOneRow;