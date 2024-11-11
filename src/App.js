import React from 'react'
// import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newletter from './components/Newletter';
import NewCard from './components/NewCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newletter />
      <NewCard />
      <Footer />
    </div>
  );
}

export default App;
