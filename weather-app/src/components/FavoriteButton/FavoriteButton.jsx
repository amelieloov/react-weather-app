import './FavoriteButton.css';
import { useState } from 'react';

const FavoriteButton = ({handleAddFavorite}) => {

    return(
        <button onClick={handleAddFavorite}>Fave</button>
    )
}

export default FavoriteButton;