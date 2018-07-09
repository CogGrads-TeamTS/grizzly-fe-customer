

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Container, Row, Col,Button } from 'reactstrap';

let RateProductForm = (props) => {

    const { submitRating, pristine, reset, submitting } = props

    return (
        
        <Col md="6">
            <form onSubmit={submitRating} autoComplete="off">
                <div>
                    <Field name="review" 
                            component="textarea" 
                                placeholder="Add Review" 
                                    rows={5} 
                                        className="review-textarea" />
                </div>
                                           
                <label>Select Rating</label>
                <div>
                    <Field name="rating" component="select" style={{width: "100px", height: "30px", marginBottom: "10px"}}>
                        <option>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Field>
                
                    
                    <button type="submit" disabled={pristine || submitting} style={{float: "right"}}>Submit Review</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset} style={{float: "right", marginRight: "10px"}}>Clear</button>
                </div>
            </form>     
       </Col> 
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'ratingsForm'
})(RateProductForm)
