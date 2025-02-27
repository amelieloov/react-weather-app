import './FavoriteList.css';
import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

const FavoriteList = ({favorites, handleSearch}) => {

    //const {favorites, handleSearch} = useContext(WeatherContext);

    const faveList = favorites.map(favorite => {
        return <li className="favorite-item" key={favorite} onClick={() => handleSearch(favorite)}>{favorite}</li>
    });

    return (
        <div className="favorite-list">
            <ul>
                <h3>Favoriter</h3>{favorites.length > 0 ? (faveList) : (<li className="favorite-info">Inga favoriter än</li>)}
            </ul>
        </div>
    );
}

export default FavoriteList;