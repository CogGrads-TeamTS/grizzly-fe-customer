import React, { Component } from 'react';
import {Row, Col, Card, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import isAuthenticated from '../../Auth/isAuthenticated';
import CheckoutSummary from './CheckoutSummary';

class Checkout extends Component {
    renderField(field) {
        const { meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger': ''}`;

        return (
            <div className={className}>
            <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type ? field.type : 'text'} 
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error:''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;
        
        return (
            <div>
                <Row>
                    <Col sm="12" md="6">
                        <Card style={{padding:"20px", margin: "25px"}}>
                            <h1 class="display-4">Checkout Details</h1>
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                <FormGroup>
                                    <Field type="email" label="Email" name="email" component={this.renderField} />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" label="Contact Phone" name="phone" component={this.renderField} />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" label="Shipping Full Name" name="ship_name" component={this.renderField} />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" label="Shipping Address" name="ship_address" component={this.renderField} />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" label="Shipping City" name="ship_city" component={this.renderField} />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" label="Shipping Postal Code" name="ship_postcode" component={this.renderField} />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" label="Comments" name="comments" component={this.renderField} />
                                </FormGroup>
                            </form>
                        </Card>
                    </Col>
                    <Col sm="12" md="6">
                        <CheckoutSummary />
                    </Col>
                </Row>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.email) {
        errors.email = "This field is required.";
    }
    if (!values.phone) {
        errors.phone = "This field is required.";
    }
    if (!values.ship_name) {
        errors.ship_name = "This field is required.";
    }
    if (!values.ship_address) {
        errors.ship_address = "This field is required.";
    }
    if (!values.ship_city) {
        errors.ship_city = "This field is required.";
    }
    if (!values.ship_postcode) {
        errors.ship_postcode = "This field is required.";
    }

    // If errors is empty, form is fine to submit
    // If errors has any properties, redux form assumes form is invalid
    return errors;
}

const mapStateToProps = (state) => { 
    return{
        user: state.user.user,
        userIsLoading: state.userIsLoading,
        cart: state.cart.cart
    };
};

export default reduxForm({
    validate,
    form: 'CheckoutForm'
})
(connect(mapStateToProps, null)(Checkout));