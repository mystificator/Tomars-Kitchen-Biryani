import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_biryani  flex__center">
        <p className="app__specialMenu-menu_heading">Biryani</p>
        <div className="app__specialMenu_menu_items">
          {data.biryanis.map((biryani, index) => (
            <MenuItem key={biryani.title + index} title={biryani.title} price={biryani.price} tags={biryani.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_chickenMainCourse  flex__center">
        <p className="app__specialMenu-menu_heading">Chicken Main Course</p>
        <div className="app__specialMenu_menu_items">
          {data.chickenMainCourse.map((chickenMain, index) => (
            <MenuItem key={chickenMain.title + index} title={chickenMain.title} price={chickenMain.price} tags={chickenMain.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_eggMainCourse  flex__center">
        <p className="app__specialMenu-menu_heading">Egg Main Course</p>
        <div className="app__specialMenu_menu_items">
          {data.eggMainCourse.map((eggMain, index) => (
            <MenuItem key={eggMain.title + index} title={eggMain.title} price={eggMain.price} tags={eggMain.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-title">
      <SubHeading title="**Rates shown only for half plate" />
    </div>
  </div>
);

export default SpecialMenu;
