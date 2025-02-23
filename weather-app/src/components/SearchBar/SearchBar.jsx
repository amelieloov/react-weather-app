import { useState } from "react";
import './SearchBar.css';

const SearchBar = ({onSearch}) => {
    const[inputValue, setInputValue] = useState([]);
    //const searchRef = useRef();

    const handleSearch = (e) => {
        if (e.key === "Enter"){
            onSearch(inputValue)
            setInputValue("");
            //const condition = searchRef.current.value;
            //setSearchResults(<ForecastContainer city={condition}/>);
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return(
    <>
        <div>
            <input onKeyDown={handleSearch} className="searchBar" type="text" value={inputValue} onChange={handleChange} placeholder=" 🔍 Sök och välj stad"/>
        </div>
        {/* {searchResults} */}
    </>
    )
}

export default SearchBar;