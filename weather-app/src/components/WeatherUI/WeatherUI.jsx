
import './WeatherUI.css';

import ForecastList from '../ForecastList/ForecastList.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import FavoriteList from '../FavoriteList/FavoriteList.jsx';
import FavoritesContainer from '../../containers/FavoritesContainer.jsx';

import {useContext} from 'react';
import { WeatherContext } from '../../context/WeatherContext.jsx';
import CurrentWeatherItem from '../CurrentWeatherItem/CurrentWeatherItem.jsx';

const WeatherUI = ({handleSearch, onBlur, onFocus}) => {

    const {weatherList, location, fetchError, favorites, showList, currentWeather} = useContext(WeatherContext);

    return (<div>
        <CurrentWeatherItem item={currentWeather}/>
        <div className="upper-part">
            <div className="left-side">
                <div className="search-wrapper">
                    <SearchBar handleSearch={handleSearch} fetchError={fetchError} onFocus={onFocus} onBlur={onBlur} />
                    {showList && <FavoriteList className="dropdown" favorites={favorites} handleSearch={handleSearch} />}
                </div>
            </div>
            <div className="right-side">
                <h1 className="right-side-text">Väder i {location}</h1>
                <FavoritesContainer/>
            </div>
        </div>
        <ForecastList list={weatherList} />
    </div>)
}

export default WeatherUI;