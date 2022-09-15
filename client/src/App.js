//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Landingpage from './components/LandingPage/Landingpage';
import Postview from './components/PostView/Postview';
import Formpage from "./components/FormPage/Formpage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/postview' element={<Postview/>}/>
        <Route path="/formpage" element={<Formpage/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App;
