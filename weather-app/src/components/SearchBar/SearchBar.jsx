import './SearchBar.css';
import { useState,  useContext } from "react";
import { WeatherContext } from '../../context/WeatherContext.jsx';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
    const {handleSearch, fetchError, onFocus, onBlur} = useContext(WeatherContext);

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
                onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder={fetchError ? "Plats ej funnen" : "Sök på plats"} />
        </>
    )
}

export default SearchBar;