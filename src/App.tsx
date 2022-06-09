/* eslint-disable max-len */
import * as React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import Results from './Pages/Results';
import Result from './Pages/Results/Result';
import Profile, { Overview, Favorites, FilterLog } from './Pages/Profile';
import Register from './Pages/Register';
import Login from './Pages/Login';
import EditProfile from './Pages/Profile/EditProfile';

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
          <Route path="edit" element={<EditProfile />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
