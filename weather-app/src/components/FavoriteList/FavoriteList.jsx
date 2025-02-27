import './FavoriteList.css';

const FavoriteList = ({ favoriteList, handleListItemClick }) => {

    const faveList = favoriteList.map(favorite => {
        return <li className="favorite-item" key={favorite} onClick={() => handleListItemClick(favorite)}>{favorite}</li>
    });

    return (
        <div className="favorite-list">
            <ul>
                <h3>Favoriter</h3>{favoriteList.length > 0 ? (faveList) : (<li className="favorite-info">Inga favoriter än</li>)}
            </ul>
        </div>
    );
}

export default FavoriteList;