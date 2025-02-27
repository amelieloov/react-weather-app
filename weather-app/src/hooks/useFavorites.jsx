import {useState} from 'react';

const useFavorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        if (favorites.includes(location)) {
            setFavorites((prev) => prev.filter(fave => fave !== location));
            setIsFavorite(false);
        } else {
            setFavorites([...favorites, location]);
            setIsFavorite(true);
        }
    }

    return {favorites, isFavorite, toggleFavorite};
}

export default useFavorites;