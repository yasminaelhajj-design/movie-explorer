import { Link, useParams } from 'react-router-dom';
import { movies } from '../data/movies.js';
import { useFavorites } from '../hooks/useFavorites.js';
import React from "react";
export default function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(item => item.id === id);
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!movie) {
    return (
      <section className="section page-section">
        <div className="container">
          <h1>Movie not found</h1>
          <Link to="/movies" className="btn">Back to Movies</Link>
        </div>
      </section>
    );
  }

  const favorite = isFavorite(movie.id);

  return (
    <section className="section page-section">
      <div className="container details-grid">
        <img src={movie.image} alt={movie.title} className="details-img" />
        <div className="details-content">
          <p className="eyebrow">Movie details</p>
          <h1>{movie.title}</h1>
          <div className="tags">
            {movie.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
          <p>{movie.description}</p>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Rating:</strong> ⭐ {movie.rating}/10</p>
          <button className={favorite ? 'btn favorite-added' : 'btn'} onClick={() => toggleFavorite(movie.id)}>
            {favorite ? 'Added to Favorites' : 'Add to Favorites'}
          </button>
          <Link to="/movies" className="btn-outline back-btn">Back to movies</Link>
        </div>
      </div>
    </section>
  );
}
