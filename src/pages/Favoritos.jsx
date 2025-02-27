import React, { useContext } from 'react';
import { FavoritesContext } from '../hooks/FavoritesContext';

export const Favoritos = () => {
  const { favoritos } = useContext(FavoritesContext);

  const favoriteCharacters = favoritos.filter(item => item.type === 'character');
  const favoriteEpisodes = favoritos.filter(item => item.type === 'episode');
  const favoriteLocations = favoritos.filter(item => item.type === 'location');

  return (
    <div className="container">
      <h1 className="my-4">Favoritos</h1>

      <div>
        <h2>Personajes</h2>
        {favoriteCharacters.length === 0 ? (
          <p>No hay personajes favoritos.</p>
        ) : (
          <div className="row">
            {favoriteCharacters.map(fav => (
              <div key={fav.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img 
                    src={fav.data.image} 
                    className="card-img-top" 
                    alt={fav.data.name} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">{fav.data.name}</h5>
                    <p className="card-text">Estado: {fav.data.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2>Episodios</h2>
        {favoriteEpisodes.length === 0 ? (
          <p>No hay episodios favoritos.</p>
        ) : (
          <div className="row">
            {favoriteEpisodes.map(fav => (
              <div key={fav.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{fav.data.name}</h5>
                    <p className="card-text">Código: {fav.data.episode}</p>
                    <p className="card-text">Fecha: {fav.data.air_date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2>Ubicaciones</h2>
        {favoriteLocations.length === 0 ? (
          <p>No hay ubicaciones favoritas.</p>
        ) : (
          <div className="row">
            {favoriteLocations.map(fav => (
              <div key={fav.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{fav.data.name}</h5>
                    <p className="card-text">Tipo: {fav.data.type}</p>
                    <p className="card-text">Dimensión: {fav.data.dimension}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
