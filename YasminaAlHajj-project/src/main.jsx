import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import Categories from './pages/Categories.jsx';
import Contact from './pages/Contact.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import Favorites from './pages/Favorites.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="categories" element={<Categories />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="contact" element={<Contact />} />
          <Route path="movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
