import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard.jsx';
import { movies } from '../data/movies.js';
import { useFavorites } from '../hooks/useFavorites.js';
import React from "react";
export default function Favorites() {
  const { favorites } = useFavorites();
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-banner">
          <p className="eyebrow">My list</p>
          <h1>Favorite Movies</h1>
          
        </div>

        {favoriteMovies.length === 0 ? (
          <div className="empty-box">
            <h2>No favorites yet</h2>
            <p>Go to the movies page and press the heart button on any movie you like.</p>
            <Link to="/movies" className="btn">Browse Movies</Link>
          </div>
        ) : (
          <>
            <p className="results-text">You added {favoriteMovies.length} movie(s) to favorites.</p>
            <div className="movies-grid">
              {favoriteMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
