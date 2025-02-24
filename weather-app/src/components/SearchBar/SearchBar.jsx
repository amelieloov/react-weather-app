import { useState } from "react";
import './SearchBar.css';

const SearchBar = ({onSearch}) => {
    const[inputValue, setInputValue] = useState([]);

    const handleSearch = (e) => {
        if (e.key === "Enter"){
            onSearch(inputValue)
            setInputValue("");
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return(
    <>
        <input onKeyDown={handleSearch} className="searchBar" type="text" value={inputValue}
         onChange={handleChange} placeholder=" 🔍 Sök och välj stad"/>
    </>
    )
}

export default SearchBar;