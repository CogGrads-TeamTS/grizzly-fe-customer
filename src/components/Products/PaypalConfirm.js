import React from 'react';
 const PaypalConfirm = (props) =>{
     console.log(props.referrer);
    return(
        <div>
            Hai {props.referrer}
        </div>
    );
 }

 export default PaypalConfirm