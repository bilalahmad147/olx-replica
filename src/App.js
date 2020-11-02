import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navebar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar2/Navbar2';
import Footer from './components/Footer/Footer';
import Footer2 from './components/Footer2/Footer2';

function App() {
  return (
    <div>
      <Navebar />
      <Navbar2 />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
