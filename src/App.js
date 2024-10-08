import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import './App.css';
import MyJourney from './Pages/MyJourney';
import MyProjects from './Pages/Projects';
import MySkills from './Pages/Skills';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <MDBContainer fluid className="d-flex flex-column justify-content-between w-100 h-100" 
      style={{ backgroundColor: '#000000', color: '#7FFF00' }}>
      <ToastContainer/>
      <Navbar/>
      <Home/>
      <MyJourney/>
      <MySkills/>
      <MyProjects/>
      <Footer/>      
    </MDBContainer>
  );
}

export default App;
