import ForecastItem from '../ForecastItem/ForecastItem.jsx';
import './ForecastList.css'

const ForecastList = ({list}) => {

    if (!list || !Array.isArray(list)) {
        return <p>No forecast data available. Please check your search.</p>; // Display message if no data
      }

    const weatherList = list.map(item => {
        return(<ForecastItem item={item} key={crypto.randomUUID()}/>)
    });

    console.log("in forecastlist", weatherList);

    return(<div className="forecastListStyle">{weatherList}</div>)
}

export default ForecastList;