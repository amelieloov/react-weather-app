import { useState, useRef } from "react";
import GetForecast from '../../services/GetForecast.js';
import ForecastContainer from "../../containers/ForecastContainer.jsx";

const SearchBar = () => {
    const[searchResults, setSearchResults] = useState([]);
    const searchRef = useRef();

    const handleSearch = () => {
        setSearchResults([]);
        const condition = searchRef.current.value;

        // GetForecast(condition).then(data => {
        //     setSearchResults(data.forecast.forecastday)
        // })

        setSearchResults(<ForecastContainer city={condition}/>);
    }

    return(
    <>
        <div>
            <input type="text" ref={searchRef} placeholder="Enter a city"/>
            <button onClick={handleSearch}>Search</button>
        </div>
        {searchResults}
        {/* <ForecastContainer city={condition}/> */}
    </>
    )
}

export default SearchBar;