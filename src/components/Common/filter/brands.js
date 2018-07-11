import React from 'react';
import _ from 'lodash';

const Brands = (props) => {
    const uniqueProducts = _.uniqBy(props.products, 'brand');
    return (
        <div>
            <div className="filter-title">brand</div>
            {
                _.map(Object.values(uniqueProducts), (product, i) => {
                    // console.log(brand)
                    return (
                        <div key={i}>
                            <label className="">
                                <input type="checkbox" value="on" /> {product.brand}
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Brands;