import React from 'react';
import { FiMapPin, FiFacebook, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Ordernow } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Ordernow />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Tomar Niwas, Manjupath, Dixitpura, Jabalpur</p>
        <p className="p__opensans">+91 8889917922</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.tkb} alt="footer_logo" />
        <p className="p__opensans">&quot;Excellent Food At An Affordable Price.&quot;</p>
        <p className="p__opensans"><i>fssai</i> License No. 21422170001323</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://maps.app.goo.gl/FuZRMFtx7PoLNmvf8" target="_blank" rel="noreferrer">
            <FiMapPin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100081760330215" target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
          <a href="https://instagram.com/tomarskitchen?igshid=Yzg5MTU1MDY=" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Sunday:</p>
        <p className="p__opensans">01:00 pm - 11:00 pm</p>
        <p className="p__opensans">On Holidays:</p>
        <p className="p__opensans">Timings may differ</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Tomar&apos;s Kitchen Biryani. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
