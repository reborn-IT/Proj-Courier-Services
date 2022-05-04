import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import Results from './Pages/Results';
import Result from './Pages/Results/Result';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="results" element={<Results />} />
        <Route path="results/:resultId" element={<Result />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
