import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import '../../App.css'

class AdBanner extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    return (
      <Slider {...settings} style={{'padding-bottom': '10px'}}>
        <div className="advert watch">
          <h1>All watches 20% off!</h1>
          <p>Including major brands</p>
          <Link to="/category/Watches/46">
            <Button id="btn-rounded" color="warning">Click here for all watches</Button>
          </Link>
        </div>
        <div className="advert camera">
          <h1>Cameras now on sale!</h1>
          <p>*Limited time only</p>
          <Link to="/category/Cameras/7">
            <Button id="btn-rounded" color="warning">See Deals</Button>
          </Link>
        </div>
        <div className="advert games">
          <h1>Latest Video Games</h1>
          <p>Including consoles and accessories</p>
          <Link to="/category/Video%20Games/9">
            <Button id="btn-rounded" color="warning">Browse Games</Button>
          </Link>
        </div>
      </Slider>
    );
  }
}

export default AdBanner;