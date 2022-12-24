import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, SpecialMenu, SpecialMenu1 } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <SpecialMenu1 />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
