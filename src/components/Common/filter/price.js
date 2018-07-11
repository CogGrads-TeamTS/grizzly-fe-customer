import React from 'react';
import _ from 'lodash';
import InputRange from 'react-input-range';

const Price = (props) => {
    const highestPriceProduct = _.maxBy(props.products, 'price');
    if(props.value.max === 0) props.value.max = highestPriceProduct.price
    // props.value.max = highestPriceProduct.price;
    console.log(highestPriceProduct);
    console.log(props.value);
    return (
        <div>
            <div className="filter-title">Price</div>
            <br/>
            <InputRange
                draggableTrack
                maxValue={highestPriceProduct.price}
                minValue={0}
                onChange={value => props.updatePrice(value)}
                onChangeComplete={value => console.log(value)}
                value={props.value} />
        </div>
    )
}

export default Price;