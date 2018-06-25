import React from 'react';
import { Button } from 'reactstrap';

const CustomerSortByButton = (props) => { console.log(props.category);
    const  category  = props.category;
    const name = props.name;
    return (
        <div>
            <Button outline id="btn-rounded" onClick={() => props.load(category)} className="m-t-10 btn-block" color="info">{name}</Button>
        </div>
    )
};


export default CustomerSortByButton;