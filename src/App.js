import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navebar from './components/Navbar/Navbar';
import Poster from './components/Poster/Poster';

function App() {
  return (
    <div>
      <Navebar />
      <Poster />
      <h1>hello world</h1>
    </div>
  );
}

export default App;
