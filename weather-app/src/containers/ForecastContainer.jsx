import {useState, useEffect} from 'react';
import ForecastList from '../components/ForecastList/ForecastList.jsx';
import GetForecast from '../services/GetForecast';

const ForecastContainer = () => {
    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        GetForecast()
        .then(data => {
            setWeatherList(data.forecast.forecastday)
        });
    }, []);

    console.log("State:", weatherList);

    return(<ForecastList list={weatherList}/>)
}

export default ForecastContainer;