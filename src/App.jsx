import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import HomePagee from "./components/HomePagee"
import AboutPage from "./pages/AboutPage"
// import Coursespage from "./pages/Coursespage"
import SpecializationsPage from"./pages/SpecializationsPage"

const App = () => {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePagee />}/>
          <Route path="/about" element={<AboutPage />}/>
          {/* <Route path="/Course" element={<Coursespage />}/> */}
          <Route path="/Specializations" element={<SpecializationsPage />}/>

        </Routes>
      </Router>
    </div>
     
    </>
  );
};

export default App;
