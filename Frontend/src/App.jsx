import React from 'react'
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom"
import {Toaster} from "react-hot-toast"
const App = () => {
  return (
    <Router>
      <Navbar/>
      <HerSection/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </Router>
  );
};

export default App;
