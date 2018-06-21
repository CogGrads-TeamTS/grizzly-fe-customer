import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Slider from "react-slick";

import '../../App.css'

class AdBanner extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000
    };

    return (
      <Slider {...settings} style={{'padding-bottom': '10px'}}>
        <div className="advert watch">
          <h3>All watches 20% off!</h3>
          <p>Including major brands</p>
          <Button id="btn-rounded" color="warning">Click here for all watches</Button>
        </div>
        <div className="advert camera">
          <h3>Cameras now on sale!</h3>
          <p>*Limited time only</p>
          <Button id="btn-rounded" color="warning">See Deals</Button>
        </div>
        <div className="advert book">
          <h3>Latest Books</h3>
          <p>Including Ebooks and Audiobooks</p>
          <Button id="btn-rounded" color="warning">Browse Books</Button>
        </div>
      </Slider>
    );
  }
}

export default AdBanner;