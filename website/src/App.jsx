import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/chi-sono" element={<About />} />
        <Route path="/servizi" element={<Services />} />
        <Route path="/contatti" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
