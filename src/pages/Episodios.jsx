import React, { useEffect, useState, useContext } from 'react';
import { FavoritesContext } from '../hooks/FavoritesContext';

export const Episodios = () => {
  const [episodes, setEpisodes] = useState([]);
  const { favoritos, toggleFavorite } = useContext(FavoritesContext);

  async function getAllEpisodes(url = 'https://rickandmortyapi.com/api/episode') {
    let allEpisodes = [];
    let nextUrl = url;
    try {
      while (nextUrl) {
        const response = await fetch(nextUrl);
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.status}`);
        }
        const data = await response.json();
        allEpisodes = allEpisodes.concat(data.results);
        nextUrl = data.info.next; 
      }
      return allEpisodes;
    } catch (error) {
      console.error('Error al obtener los episodios:', error);
      return [];
    }
  }

  useEffect(() => {
    getAllEpisodes().then(data => setEpisodes(data));
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Lista de Episodios</h1>
      <div className="row">
        {episodes.map(episode => (
          <div key={episode.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{episode.name}</h5>
                <p className="card-text">Fecha de emisión: {episode.air_date}</p>
                <p className="card-text">Código: {episode.episode}</p>
                <button 
                  onClick={() => toggleFavorite({ id: episode.id, type: 'episode', data: episode })} 
                  className="btn btn-primary"
                >
                  {favoritos.find(item => item.id === episode.id && item.type === 'episode')
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
