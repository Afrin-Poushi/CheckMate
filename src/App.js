import React, {useState} from 'react';
import Avatar from 'react-avatar';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';


function App() {

  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="appName">
          <h1 className="heading">CheckMate</h1>
        </div>
        
        
        <div className="rightLabel">
          <button type="submit" className="btn add">Add</button>
          <Avatar name="Unknown" size="50" round={true} />
        </div>
        
        <form action="">
          <input type="text" id="header-search" placeholder="Search anything" />
          <button type="submit">Search</button>
        </form>

        <div className="topnav">
          <a className="active" href="#important">Important</a>
          <a href="#upcoming">Upcoming</a>
          <a href="#inProgress">In Progress</a>
          <a href="#done">Done</a>
        </div>


      </div>
    </Router>
  );
}

export default App;
