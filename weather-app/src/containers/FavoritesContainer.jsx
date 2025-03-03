import FavoriteButton from "../components/FavoriteButton/FavoriteButton";
import { WeatherContext } from "../context/WeatherContext";
import { useContext, useEffect } from "react";

const FavoritesContainer = () => {

    const {location, favorites, isFavorite, setFavorites, setIsFavorite} = useContext(WeatherContext)

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
        localStorage.setItem("isFavorite", JSON.stringify(isFavorite));
    }, [favorites, isFavorite]);

    const toggleFavorite = () => {
        if (favorites.includes(location)) {
            setFavorites((prev) => prev.filter(fave => fave !== location));
            setIsFavorite(false);
        } else {
            setFavorites([...favorites, location]);
            setIsFavorite(true);
        }
    }

    return(
        <FavoriteButton toggleFavorite={toggleFavorite} isFavorite={isFavorite}/>
    )
}

export default FavoritesContainer;