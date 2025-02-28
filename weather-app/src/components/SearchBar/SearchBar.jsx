import './SearchBar.css';
import { useState } from "react";

const SearchBar = ({handleSearch, fetchError, onFocus, onBlur}) => {
    const [inputValue, setInputValue] = useState("");

    const search = (e) => {
        if (e.key === "Enter") {
            handleSearch(inputValue);
            setInputValue("");
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <input onKeyDown={search} className="searchBar" type="text" value={inputValue}
                onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder={fetchError ? "Inga resultat" : "Sök på plats"} />
        </>
    )
}

export default SearchBar;