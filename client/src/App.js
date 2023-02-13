import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/layout/header/header.js';
import Footer from './components/layout/footer/Footer.js';
import Home from './components/Home/Home.jsx';
function App() {
  return (
    <>
      <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
