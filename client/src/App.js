import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css';
import React from 'react'
import Navbar from './components/navbar';
import pageconfig from './components/pageconfig';

export default class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <Routes>
              {pageconfig.generateRoutes()}
            </Routes>
        </div>
      </BrowserRouter>
    )
  } 
}
