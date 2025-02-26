import {formatDate} from '../../utils/dateUtils';
import { formatDateWithTime } from '../../utils/dateUtils';
import './WeatherItem.css'

const WeatherItem = ({item}) => {
    return (
        <>
            <div className="startIcon">
                <h4>{item?.location?.name}</h4>
                <h2>{item?.current?.temp_c}℃</h2>
                <p>{formatDateWithTime(item?.location?.localtime)}</p>
            </div>
        </>
    )
}

export default WeatherItem;