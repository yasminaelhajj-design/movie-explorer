import { useMemo, useState } from 'react';
import MovieCard from '../components/MovieCard.jsx';
import { movies } from '../data/movies.js';
import React from "react";
const categories = ['All', 'Action', 'Adventure', 'Sci-Fi', 'Family'];

export default function Movies() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || movie.category === category || movie.tags.includes(category);
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="section page-section">
      <div className="container">
        <div className="section-head">
          <div>
            <h1>Movies</h1>
            <p>Search movies or filter them by category.</p>
          </div>
        </div>

        <div className="filters-box">
          <input
            type="text"
            placeholder="Search movie name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="filter-buttons">
            {categories.map(item => (
              <button
                key={item}
                className={category === item ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <p className="results-text">Showing {filteredMovies.length} movie(s)</p>

        <div className="movies-grid">
          {filteredMovies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
      </div>
    </section>
  );
}
