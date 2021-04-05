import React from 'react';
import Avatar from 'react-avatar';
import OffcanvasMenu from 'react-offcanvas-menu-component';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="heading">CheckMate</h1>
      
      
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
  );
}

export default App;
