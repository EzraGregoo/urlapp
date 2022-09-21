import React from 'react';
import './App.css';
import { Navbar, Header, Urlform, Section, Footer } from './components';

function App() {
  return (
    <div className='app font-poppins relative'>
      <header className='relative h-[calc(100vh+70px)] p-5'>
        <Navbar />
        <Header />
        <Urlform />
      </header>
      <Section />
      <Footer />
    </div>
  );
}

export default App;
