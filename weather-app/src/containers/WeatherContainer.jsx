
import {useContext, useEffect} from 'react';

import { GetForecastByLatLon, GetLatLonByCityName, GetUserPosition } from '../services/WeatherService.js';

import { WeatherContext } from '../context/WeatherContext.jsx';
import WeatherUI from '../components/WeatherUI/WeatherUI.jsx';


const WeatherContainer = () => {

    const {setWeatherList, setLocation, favorites, setShowList, setIsFavorite, setFetchError} = useContext(WeatherContext);

    useEffect(() => {

        const fetchForecast = async () => {
            try {
                const { lat, lon } = await GetUserPosition();
                fetchForecastByLatLon({ lat, lon });
            } catch (error) {
                fetchForecastByLatLon({ lat: 59.334591, lon: 18.063240 });
                console.error("Failed to get user position/weather data:", error);
            }
        };

        fetchForecast();

    }, []);

    const fetchForecastByLatLon = async ({ lat, lon }) => {

        try {
            const data = await GetForecastByLatLon({ lat, lon });

            setWeatherList(data.list.filter((_, index) => index % 8 === 0));
            setLocation(data.city.name);
            setFetchError(null);
        }
        catch (err) {
            setFetchError(err.message);
        }
    } 

    const handleSearch = async (newCity) => {

        const coords = await GetLatLonByCityName(newCity);
        if (coords) {
            const { lat, lon } = coords;
            fetchForecastByLatLon({ lat, lon });
            setFetchError(false);
        }
        else{
            setFetchError(true);
        }

        setShowList(false);

        (favorites.includes(newCity) ? setIsFavorite(true) : setIsFavorite(false))
    }

    const onBlur = () => setTimeout(() => setShowList(false), 100);

    const onFocus = () => setShowList(true);

    return (<WeatherUI handleSearch={handleSearch} onBlur={onBlur} onFocus={onFocus}/>);
}

export default WeatherContainer;