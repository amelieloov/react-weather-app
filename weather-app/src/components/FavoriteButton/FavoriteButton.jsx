import './FavoriteButton.css';

const FavoriteButton = ({handleAddFavorite, isFavorite}) => {

    return(
        <button onClick={handleAddFavorite}>{isFavorite ? "♥" : "♡"}</button>
    )
}

export default FavoriteButton;