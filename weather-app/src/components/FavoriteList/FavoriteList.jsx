import './FavoriteList.css';

const FavoriteList = ({ favoriteList, handleListItemClick }) => {
    console.log("handleListItemClick prop:", handleListItemClick);
    console.log("Type of handleListItemClick:", typeof handleListItemClick);
    console.log("before", favoriteList);

    const faveList = favoriteList.map(favorite => {
        return <li className="favorite-item" key={favorite} onClick={() => handleListItemClick(favorite)}>{favorite}</li>
    });

    console.log("after", faveList);

    return (
        <div className="favorite-list"><ul>{favoriteList.length > 0 ? (
            faveList
        ) : (<li>No favorites yet</li>)}</ul></div>
    );
}

export default FavoriteList;