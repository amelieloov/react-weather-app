import {useState, useEffect} from 'react';
import ForecastList from '../components/ForecastList/ForecastList.jsx';

const ForecastContainer = () => {
    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        GetForecast()
        .then(data => {
            setWeatherList(data)
        });
    }, []);
    console.log("State:", weatherList);

    return(<ForecastList list={weatherList}/>)
}

export default ForecastContainer;