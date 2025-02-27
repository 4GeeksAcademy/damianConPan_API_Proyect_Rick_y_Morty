import React, { useEffect, useState, useContext } from 'react';
import { FavoritesContext } from '../hooks/FavoritesContext';

export const Ubicaciones = () => {
  const [locations, setLocations] = useState([]);
  const { favoritos, toggleFavorite } = useContext(FavoritesContext);

  async function getAllLocations(url = 'https://rickandmortyapi.com/api/location') {
    let allLocations = [];
    let nextUrl = url;
    try {
      while (nextUrl) {
        const response = await fetch(nextUrl);
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.status}`);
        }
        const data = await response.json();
        allLocations = allLocations.concat(data.results);
        nextUrl = data.info.next;
      }
      return allLocations;
    } catch (error) {
      console.error('Error al obtener las ubicaciones:', error);
      return [];
    }
  }

  useEffect(() => {
    getAllLocations().then(data => setLocations(data));
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Lista de Ubicaciones</h1>
      <div className="row">
        {locations.map(location => (
          <div key={location.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{location.name}</h5>
                <p className="card-text">Tipo: {location.type}</p>
                <p className="card-text">Dimensión: {location.dimension}</p>
                <button 
                  onClick={() => toggleFavorite({ id: location.id, type: 'location', data: location })}
                  className="btn btn-primary"
                >
                  {favoritos.find(item => item.id === location.id && item.type === 'location')
                    ? 'Quitar Favorito'
                    : 'Agregar a Favoritos'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
