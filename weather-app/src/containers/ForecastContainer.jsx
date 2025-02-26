// import {useState, useEffect} from 'react';
// import ForecastList from '../components/ForecastList/ForecastList.jsx';
// import GetForecast from '../services/GetForecast';
// import SearchBar from '../components/SearchBar/SearchBar.jsx';
// import './ForecastContainer.css';

// const ForecastContainer = () => {
//     const [weatherList, setWeatherList] = useState([]);
//     const [location, setLocation] = useState("Stockholm");

//     useEffect(() => {
//         fetchForecast(location);
//     }, []);

//     const handleSearch = (newCity) => {
//         setLocation(newCity);
//         return fetchForecast(newCity);
//     }

//     const fetchForecast = (city) => {
//         GetForecast(city)
//         .then(data => {
//             setWeatherList(data.forecast.forecastday)
//         });
//     }

//     console.log("State:", weatherList);

//     return(<div className="forecast-container">
//         <div className="upper-part">
//         <h1>Väder i {location}</h1>
//         <SearchBar className="searchBar" onSearch={handleSearch}/>
//         </div>
//         <ForecastList list={weatherList}/>
//         </div>)
// }

// export default ForecastContainer;








import {useState, useEffect} from 'react';
import ForecastList from '../components/ForecastList/ForecastList.jsx';
import GetForecast from '../services/GetForecast';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import './ForecastContainer.css';

const ForecastContainer = () => {
    const [weatherList, setWeatherList] = useState([]);
    const [location, setLocation] = useState("Stockholm");
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchForecast(location);
    }, []);

    const handleSearch = (newCity) => {
        fetchForecast(newCity);
    }

    const fetchForecast = async (city) => {
        try {
            const data = await GetForecast(city);;
            setWeatherList(data.forecast.forecastday);
            setLocation(data.location.name);
            setError(null);
        }
        catch(err){
            setError(err.message);
        }
    }

    console.log("State:", weatherList);

    return(<div className="forecast-container">
        <div className="upper-part">
            <SearchBar className="searchBar" onSearch={handleSearch} error={error}/>
            <h1>Väder i {location}</h1>
        </div>
            <ForecastList list={weatherList}/>
        </div>)
}

export default ForecastContainer;