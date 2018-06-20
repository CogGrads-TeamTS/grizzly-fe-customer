import React, { Component } from 'react'

import AdBanner from '../AdBanner/AdBanner';

class Homepage extends Component {

    render() {
        return ( 
            <div>
                <p>Hello I am the homepage</p>  
                <AdBanner />         
            </div> 
        );
    }
}

export default Homepage;