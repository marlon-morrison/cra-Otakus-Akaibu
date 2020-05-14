import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/find_Acharacter/:id" component={CharacterSingle} />
        <Route path="/find_Acharacter" component={Character} />
        <Route path="/fanart" component={Fanart} />
        <Route path="/social" component={Social} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;