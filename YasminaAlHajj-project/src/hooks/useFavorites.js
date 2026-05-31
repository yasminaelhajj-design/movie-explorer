import { useEffect, useState } from 'react';

const STORAGE_KEY = 'moviezone-favorites';

function readFavorites() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(readFavorites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(movieId) {
    setFavorites((current) => {
      if (current.includes(movieId)) {
        return current.filter((id) => id !== movieId);
      }
      return [...current, movieId];
    });
  }

  function isFavorite(movieId) {
    return favorites.includes(movieId);
  }

  return { favorites, toggleFavorite, isFavorite };
}
