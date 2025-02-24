import { formatDate } from "../../utils/dateUtils";
import { formatWeekday } from "../../utils/dateUtils";
import './ForecastItem.css';

const DetailedWeatherItem = ({ item }) => {
    const currentDateTime = formatDate();

    return (
        <>
            <div className="forecastStyle">
                <div>
                    <p>{formatWeekday(item?.date)}</p>
                    <p>{formatDate(item?.date)}</p>
                </div>
                <div>
                    <h1>{item?.day?.maxtemp_c}℃</h1>
                    <h3>{item?.day?.mintemp_c}℃ min</h3>
                </div>
                <div>
                    <img src={item.day.condition.icon} alt="weather-icon" />
                </div>
            </div>
        </>
    )
}

export default DetailedWeatherItem;