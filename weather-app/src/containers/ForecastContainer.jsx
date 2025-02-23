import {useState, useEffect} from 'react';
import ForecastList from '../components/ForecastList/ForecastList.jsx';
import GetForecast from '../services/GetForecast';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import './ForecastContainer.css';

const ForecastContainer = () => {
    const [weatherList, setWeatherList] = useState([]);
    const [location, setLocation] = useState("Stockholm");

    useEffect(() => {
        fetchForecast(location);
    }, []);

    const handleSearch = (newCity) => {
        setLocation(newCity);
        return fetchForecast(newCity);
    }

    const fetchForecast = (city) => {
        GetForecast(city)
        .then(data => {
            setWeatherList(data.forecast.forecastday)
        });
    }

    console.log("State:", weatherList);

    return(<div className="forecast-container">
        <div className="upper-part">
        <h1>Väder i {location}</h1>
        <SearchBar className="searchBar" onSearch={handleSearch}/>
        </div>
        <ForecastList list={weatherList}/>
        </div>)
}

export default ForecastContainer;