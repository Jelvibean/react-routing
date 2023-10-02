import { createContext, useState } from "react";


// This sets state I believe.
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}

});

// will be the one that gives all the needed updated data.
export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);

    // ADDS THE ITEM
    function addFavoriteHandler(favoriteMeetup) {
        //setUserFavorites(userFavorites.concat(favoriteMeetup));
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        })
    }

    //REMOVES THE ITEM
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            // if the item is equal.. that will be false and that item will be removed.
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);            
        }); 
    }

    //IS THE ITEM A FAVORATE OR NOT... This returns true or false
    function itemsIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemsIsFavoriteHandler 

    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;