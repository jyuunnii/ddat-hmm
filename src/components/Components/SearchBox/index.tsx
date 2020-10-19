import React, { useState } from 'react';
import './index.css';

type SearchBoxProps = {
    onCreate: (value: string) => void;
}

const SearchBox = ({onCreate}: SearchBoxProps) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreate(searchValue);
    };
    
    return(
        <div style={{position: "relative"}}>
            <form onSubmit={handleSubmit}>
                <div className="search-value"><input type="text" value={searchValue} onChange={onChange}/></div>
                <div><span className="material-icons-round search-icon">search</span></div>
            </form>
        </div>
    )
}

export default SearchBox;