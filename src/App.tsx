import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import CharacterSingle from './CharacterSingle';
import Character from './Character';
import Fanart from './Fanart';
import Social from './Social';
import Footer from './Footer';

import Error from './Error';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/find_Acharacter/:id" element={<CharacterSingle />} />
        <Route path="/find_Acharacter" element={<Character />} />
        <Route path="/fanart" element={<Fanart />} />
        <Route path="/social" element={<Social />} />
        <Route element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;