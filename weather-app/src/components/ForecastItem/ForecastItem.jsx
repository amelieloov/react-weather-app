import { formatDate } from "../../utils/dateUtils";
import { formatWeekday } from "../../utils/dateUtils";
import './ForecastItem.css';

const ForecastItem = ({ item }) => {

    return (
        <>
            <div className="forecastStyle">
                <div>
                    <p>{formatWeekday(item?.dt_txt)}</p>
                    <p>{formatDate(item?.dt_txt)}</p>
                </div>
                <div>
                    <h1>{item?.main?.temp_max}℃</h1>
                    <h3>{item?.main?.temp_min}℃ min</h3>
                </div>
                <div className="icon">
                    <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`} alt="weather-icon" />
                </div>
            </div>
        </>
    )
}

export default ForecastItem;