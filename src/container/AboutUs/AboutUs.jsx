import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.T} alt="T_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At <b>Tomar&apos;s Kitchen Biryani</b>, we strive to provide A variety Of cuisines At affordable Rates For non-vegetarian lovers And vegetarian admirers alike. We take pride in being able to provide our customers with exceptional food at such low prices, which is not often found at other Indian restaurants you may visit. We stick to our motto: &quot;Excellent Food at an Affordable Price&quot;.</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">During the COVID-19 pandemic, it was difficult for non-vegans to find affordable, unsullied food due to various restrictions on non-veg food. It Was One Of Our Main Motives For Starting <b>TKB</b> In 2022, Along With Providing Tasty Biryanis At Minimal Rates. We began our Cloud Kitchen with mouthwatering chicken biryanis and other non-vegetarian items, but later expanded to include vegetarian options as well. </p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
