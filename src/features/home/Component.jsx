import React from 'react';
import Slider from '~/components/Slider/Slider';
import Header from '../../components/header/Header';
import '../../styles/grid/grid.css';

function HomeComponent() {
  return (
    <div className="body">
      <div className="header-home">
        <div className="header-content">
          <Header></Header>
        </div>
        <div className="slider-home">
          <Slider></Slider>
        </div>
      </div>

      <div className="content-home"></div>
      <div className="footer-home"></div>
    </div>
  );
}

export default HomeComponent;
