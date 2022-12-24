import React from 'react';

import { FiMapPin } from 'react-icons/fi';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Tomar Niwas, Manjupath, Dixitpura Road, Jabalpur, madhya Pradesh 482002</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Sun: 01:00 pm - 11:00 pm</p>
        <p className="p__opensans">On Holidays: Timings may differ</p>
      </div>
      <div className="app__footer-links_icons">
        <a href="https://maps.app.goo.gl/FuZRMFtx7PoLNmvf8" target="_blank" rel="noreferrer">
          <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us </button>
          <FiMapPin />
        </a>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
