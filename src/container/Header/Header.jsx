import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  // const [toggleMenu, setToggleMenu] = React.useState(false);
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="TOMAR'S KITCHEN BIRYANI" />
      <h1 className="app__header-h1">A Journey of Taste</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>We bring you an authentic taste of delicious biryanis made with perfection</p>
      <a href="#menu">
        <button type="button" className="custom__button">Explore Menu</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="header_img" />
    </div>
  </div>
);

export default Header;
