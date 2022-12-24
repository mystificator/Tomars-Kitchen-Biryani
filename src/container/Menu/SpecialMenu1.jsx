import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data } from '../../constants';
import './SpecialMenu1.css';

const SpecialMenu11 = () => (
  <div className="app__SpecialMenu1 flex__center section__padding" id="menu">
    <div className="app__SpecialMenu1-title">
      <h1 className="headtext__cormorant">Menu</h1>
    </div>

    <div className="app__SpecialMenu1-menu">

      <div className="app__SpecialMenu1-menu_vegMainCourse  flex__center">
        <p className="app__SpecialMenu1-menu_heading">Veg Main Course</p>
        <div className="app__SpecialMenu1_menu_items">
          {data.vegMainCourse.map((vegMain, index) => (
            <MenuItem key={vegMain.title + index} title={vegMain.title} price={vegMain.price} tags={vegMain.tags} />
          ))}
        </div>
      </div>

      <div className="app__SpecialMenu1-menu_rolls  flex__center">
        <p className="app__SpecialMenu1-menu_heading">Rolls</p>
        <div className="app__SpecialMenu1_menu_items">
          {data.rolls.map((roll, index) => (
            <MenuItem key={roll.title + index} title={roll.title} price={roll.price} tags={roll.tags} />
          ))}
        </div>
      </div>

      <div className="app__SpecialMenu1-menu_rotis  flex__center">
        <p className="app__SpecialMenu1-menu_heading">Roti</p>
        <div className="app__SpecialMenu1_menu_items">
          {data.rotis.map((roti, index) => (
            <MenuItem key={roti.title + index} title={roti.title} price={roti.price} tags={roti.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__SpecialMenu1-title">
      <SubHeading title="**Rates shown only for half plate" />
    </div>

  </div>
);

export default SpecialMenu11;
