import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./page/home/Home";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path={"/*"} Component={Home}></Route>
        </Routes>
      </BrowserRouter>


  );
}

export default App;
