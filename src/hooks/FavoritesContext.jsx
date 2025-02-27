import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoritos, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favoritos');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorite = (item) => {
    const exists = favoritos.find(fav => fav.id === item.id && fav.type === item.type);
    if (exists) {
      setFavorites(favoritos.filter(fav => !(fav.id === item.id && fav.type === item.type)));
    } else {
      setFavorites([...favoritos, item]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favoritos, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
