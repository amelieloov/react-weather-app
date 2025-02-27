import { useState } from "react";
import './SearchBar.css';

const SearchBar = ({ onSearch, error, onBlur, onFocus }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            onSearch(inputValue);
            setInputValue("");
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <input onKeyDown={handleSearch} className="searchBar" type="text" value={inputValue}
                onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder={error ? "Plats ej funnen" : "Sök på plats"} />
        </>
    )
}

export default SearchBar;