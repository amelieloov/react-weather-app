import ForecastItem from '../ForecastItem/ForecastItem.jsx';
import './ForecastList.css'

const ForecastList = ({list}) => {

    if (!list || !Array.isArray(list)) {
        return <p>No forecast data available. Please check your search.</p>;
      }

    const weatherList = list.map(item => {
        return(<ForecastItem item={item} key={crypto.randomUUID()}/>)
    });

    return(<div className="forecastListStyle">{weatherList}</div>)
}

export default ForecastList;