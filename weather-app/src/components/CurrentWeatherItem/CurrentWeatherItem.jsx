
import { formatDateWithTime } from '../../utils/dateUtils';
import './CurrentWeatherItem.css'

const CurrentWeatherItem = ({item}) => {
    return (
        <>
            <div className="startIcon">
                <h4>{item?.name}</h4>
                <h2>{item?.main?.temp}℃</h2>
                <p>{formatDateWithTime(item?.dt)}</p>
            </div>
        </>
    )
}

export default CurrentWeatherItem;