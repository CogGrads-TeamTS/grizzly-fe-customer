import React from 'react';
import { Button } from 'reactstrap';

const CustomerSortByButton = (props) => {
    
        const  object  = props.object;
        const name = props.name;
        return (
            <div>
                {/* <Button outline id="btn-rounded" onClick={() => props.load(object)} className="m-t-10 btn-block" color="info1">{name}</Button> */}
                <button onClick={() => props.load(object)} className="cat-btn">{name}</button>
            </div>

        )
};
export default CustomerSortByButton;