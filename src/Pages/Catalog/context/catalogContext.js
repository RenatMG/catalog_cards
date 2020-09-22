import React, {createContext, useContext, useEffect, useState} from "react";

export const CatalogContext = createContext();
export const useCatalog = () => {
    return useContext(CatalogContext);
}


const CatalogContextProvider = props => {
    const {children} = props;
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        let favorites = localStorage.getItem('favorites');
        if (!!favorites) {
            setFavorites(JSON.parse(favorites));
        }
    }, []);

    const addToFavorites = (id) => {
        let data = [];
        if (!!favorites.length) {
            const itemIdx = favorites.findIndex(item => item === id);
            if (itemIdx === -1) {
                data = [...favorites, id]
            }
        } else {
            data = [id];
        }
        setFavorites(data);
        localStorage.setItem('favorites', JSON.stringify(data))
    };

    const removeFromFavorites = (id) => {

        if (!!favorites) {
            const itemIdx = favorites.findIndex(item => item === id);
            if (itemIdx !== -1) {
                let data = [
                    ...favorites.slice(0, itemIdx),
                    ...favorites.slice(itemIdx + 1)
                ];
                setFavorites(data);
                localStorage.setItem('favorites', JSON.stringify(data))
            }
        }
    };


    return (
        <CatalogContext.Provider value={{
            favorites,
            addToFavorites,
            removeFromFavorites
        }}>
            {children}
        </CatalogContext.Provider>
    );
};

export default CatalogContextProvider;