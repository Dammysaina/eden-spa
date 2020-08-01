import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Header from './components/header/Header';
import Postlist from './components/PostList/PostList';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
        <Postlist/>
      </div>
    </div>
  );
}

export default App;
