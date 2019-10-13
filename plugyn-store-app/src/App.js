import React from 'react';
import Header from "./Components/Header";
import Showcase from "./Components/Showcase";
import Navbar from "./Components/Navbar";
import './App.css';

function App() {
  return (
    <div className="content">
      <Header />
      <Navbar />
      <Showcase />
      
    </div>
  );
}

export default App;
