import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites.js';
import React from "react";
export default function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  return (
    <article className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-content">
        <div className="title-row">
          <h3>{movie.title}</h3>
          <button className={favorite ? 'fav-btn active' : 'fav-btn'} onClick={() => toggleFavorite(movie.id)}>
            {favorite ? '♥' : '♡'}
          </button>
        </div>
        <div className="tags">
          {movie.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <p>{movie.description}</p>
        <div className="card-actions">
          <span className="rating">⭐ {movie.rating}/10</span>
          <Link to={`/movie/${movie.id}`} className="muted-link">Read more</Link>
        </div>
      </div>
    </article>
  );
}
