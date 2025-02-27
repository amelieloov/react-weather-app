import './FavoriteButton.css';

const FavoriteButton = ({toggleFavorite, isFavorite}) => {

    return(
        <button onClick={toggleFavorite}>{isFavorite ? "♥" : "♡"}</button>
    )
}

export default FavoriteButton;