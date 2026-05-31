import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard.jsx';
import { movies } from '../data/movies.js';
import React from "react";
export default function Home() {
  const featured = movies.slice(0, 4);
  const trending = movies.filter(movie => movie.trending);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Your movie corner</p>
            <h1>Beyond the box office, into the soul of cinema.</h1>
            <p className="hero-description">Discover popular films, browse by category, and find something good to watch.</p>
            <div className="hero-actions">
              <Link to="/movies" className="btn">Browse Movies</Link>
              <Link to="/categories" className="btn-outline">Explore Categories</Link>
            </div>
          </div>
          <div className="hero-card">
            <img src="/images/batman.jpeg" alt="The Dark Knight poster" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Trending movies</h2>
             
            </div>
            <Link to="/movies" className="muted-link">View all</Link>
          </div>
          <div className="trending-list">
            {trending.map(movie => (
              <Link to={`/movie/${movie.id}`} className="trend-item" key={movie.id}>
                <span>{movie.title}</span>
                <strong>⭐ {movie.rating}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Featured movies</h2>
              
            </div>
            <Link to="/movies" className="muted-link">See all movies</Link>
          </div>
          <div className="movies-grid">
            {featured.map(movie => <MovieCard movie={movie} key={movie.id} />)}
          </div>
        </div>
      </section>
    </>
  );
}
