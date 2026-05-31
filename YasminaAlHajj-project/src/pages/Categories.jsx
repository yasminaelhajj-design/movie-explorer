import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/movies.js';
import React from "react";
const categoryInfo = [
  {
    name: 'Action',
    description: 'Includes The Dark Knight, Taken, The Meg, and Meg 2. These movies focus on danger, speed, and intense moments.',
    tone: 'Fast and intense',
    audience: 'Action and thriller fans'
  },
  {
    name: 'Sci-Fi',
    description: 'Includes Inception, Interstellar, Passengers, and Meg 2. This section is for futuristic or imaginative stories.',
    tone: 'Mysterious and creative',
    audience: 'Viewers who enjoy complex ideas'
  },
  {
    name: 'Adventure',
    description: 'Includes Interstellar and The Meg. These films involve exploration, survival, and large-scale journeys.',
    tone: 'Exciting and emotional',
    audience: 'Fans of journeys and survival stories'
  },
  {
    name: 'Fantasy & Family',
    filterName: 'Family',
    description: 'Cinderella adds a softer and magical side to the website and gives the collection a family-friendly choice.',
    tone: 'Light and magical',
    audience: 'Family audiences'
  }
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const visibleMovies = useMemo(() => {
    if (selectedCategory === 'All') {
      return movies;
    }

    return movies.filter(movie => {
      return movie.category === selectedCategory || movie.tags.includes(selectedCategory);
    });
  }, [selectedCategory]);

  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-banner">
          <h1>Movie Categories</h1>
          
        </div>

        <div className="category-grid category-grid-spaced">
          {categoryInfo.map(category => {
            const realName = category.filterName || category.name;
            const count = movies.filter(movie => movie.category === realName || movie.tags.includes(realName)).length;

            return (
              <button
                type="button"
                className={selectedCategory === realName ? 'category-card category-click active' : 'category-card category-click'}
                key={category.name}
                onClick={() => setSelectedCategory(realName)}
              >
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span>{count} movie(s)</span>
              </button>
            );
          })}
        </div>

        <div className="center-box small-gap">
          <button
            type="button"
            className={selectedCategory === 'All' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedCategory('All')}
          >
            Show All Categories
          </button>
        </div>

        <section className="section inner-section">
          <div className="section-head">
            <div>
              <h2>{selectedCategory === 'All' ? 'Movies in all categories' : `${selectedCategory} Movies`}</h2>
              
            </div>
            <Link to="/movies" className="muted-link">Open full movie search</Link>
          </div>

          <div className="movies-grid compact-grid">
            {visibleMovies.slice(0, 4).map(movie => (
              <Link to={`/movie/${movie.id}`} className="mini-movie" key={movie.id}>
                <img src={movie.image} alt={movie.title} />
                <div>
                  <h3>{movie.title}</h3>
                  <p>{movie.category} • ⭐ {movie.rating}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section inner-section">
          <div className="section-head">
            <div>
              <h2>Quick comparison table</h2>
              
            </div>
          </div>

          <div className="detail-panel table-wrap">
            <table className="movie-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Example Movies</th>
                  <th>Tone</th>
                  <th>Audience Appeal</th>
                </tr>
              </thead>
              <tbody>
                {categoryInfo.map(category => (
                  <tr key={category.name}>
                    <td>{category.name}</td>
                    <td>{movies
                      .filter(movie => movie.category === (category.filterName || category.name) || movie.tags.includes(category.filterName || category.name))
                      .map(movie => movie.title)
                      .slice(0, 3)
                      .join(', ')}</td>
                    <td>{category.tone}</td>
                    <td>{category.audience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  );
}
