import React, { useEffect, useState, useContext } from 'react';
import { FavoritesContext } from '../hooks/FavoritesContext';

export const Personajes = () => {
  const [characters, setCharacters] = useState([]);
  const { favoritos, toggleFavorite } = useContext(FavoritesContext);

  // Función para obtener todos los personajes siguiendo la paginación
  async function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    let allCharacters = [];
    let nextUrl = url;
    try {
      while (nextUrl) {
        const response = await fetch(nextUrl);
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.status}`);
        }
        const data = await response.json();
        allCharacters = allCharacters.concat(data.results);
        nextUrl = data.info.next;
      }
      return allCharacters;
    } catch (error) {
      console.error('Error al obtener los personajes:', error);
      return [];
    }
  }

  useEffect(() => {
    getAllCharacters().then(data => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Lista de Personajes</h1>
      <div className="row">
        {characters.map(character => (
          <div key={character.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={character.image} className="card-img-top" alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Estado: {character.status}</p>
                <p className="card-text">Especie: {character.species}</p>
                <button 
                  onClick={() => toggleFavorite({ id: character.id, type: 'character', data: character })} 
                  className="btn btn-primary"
                >
                  {favoritos.find(item => item.id === character.id && item.type === 'character')
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
