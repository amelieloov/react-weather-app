import { formatDate } from "../../utils/dateUtils";
import { formatWeekday } from "../../utils/dateUtils";
import getWeatherIcon from "../../utils/IconUtils";
import './ForecastItem.css';

const ForecastItem = ({ item }) => {

    return (
        <>
            <div className="forecastStyle">
                <div>
                    <p>{formatWeekday(item?.date)}</p>
                    <p>{formatDate(item?.date)}</p>
                </div>
                <div>
                    <h1>{item?.maxTemp}℃</h1>
                    <h3>{item?.minTemp}℃ min</h3>
                </div>
                <div className="icon">
                    <h2>{getWeatherIcon(item?.weatherCode)}</h2>
                </div>
            </div>
        </>
    )
}

export default ForecastItem;