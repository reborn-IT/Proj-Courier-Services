/* eslint-disable max-len */
import React from 'react';
import {
  Route, Routes, BrowserRouter as Router,
} from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import Results from './Pages/Results';
import Result from './Pages/Results/Result';
import Profile, { Overview, Favorites, FilterLog } from './Pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="results" element={<Results />} />
        <Route path="results/:resultId" element={<Result />} />
        <Route path="profile" element={<Profile />}>
          <Route path="overview" element={<Overview />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="filterlog" element={<FilterLog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
