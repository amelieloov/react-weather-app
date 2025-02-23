import {formatDate} from '../../utils/dateUtils';
import { formatTime } from '../../utils/dateUtils';
import './WeatherItem.css'

const WeatherItem = ({item}) => {
    return (
        <>
            <div className="startIcon">
                <h2>{item?.location?.name}</h2>
                <h1>{item?.current?.temp_c}℃</h1>
                <p>{formatDate(item?.location?.localtime)}</p>
                <p>{formatTime(item?.location?.localtime)}</p>
            </div>
        </>
    )
}

export default WeatherItem;