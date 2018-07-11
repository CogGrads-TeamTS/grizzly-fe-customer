import React, { Component } from 'react';
import _ from 'lodash';
import Brands from './brands';
import Price from './price';
import InputRange from 'react-input-range';

import './filter.css'
import 'react-input-range/lib/css/index.css'

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: {
                min: 0,
                max: 0,
            }
        }

        this.updatePrice = this.updatePrice.bind(this);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.products !== this.props.products) {
            this.setState({
                value: {
                    min: 0,
                    max: 0,
                }
            })
        }
    }

    updatePrice = (value) => {
        if(value.min < 0) value.min=0
        this.setState({
            value: value
        })
    }
    
    render() {
        return (
            <div className="left-sidebar">
                <div className="filter-group">
                    <Brands products={this.props.products} />
                </div>
                <br />
                <div className="filter-group">
                <Price updatePrice={this.updatePrice} value={this.state.value} products={this.props.products}/>
                    {/* <InputRange
                        draggableTrack
                        maxValue={20}
                        minValue={0}
                        onChange={value => this.setState({ value: value })}
                        onChangeComplete={value => console.log(value)}
                        value={this.state.value} /> */}
                </div>
            </div>
        );
    }

}

export default Filter;