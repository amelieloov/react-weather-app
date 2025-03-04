import './FavoriteList.css';

const FavoriteList = ({favorites, handleSearch}) => {

    const faveList = favorites.map(favorite => {
        return <li className="favorite-item" key={favorite} onMouseDown={() => handleSearch(favorite)}>{favorite}</li>
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