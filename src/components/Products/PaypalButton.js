import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import scriptLoader from 'react-async-script-loader';
import paypal from 'paypal-checkout';
import './ProductSingle.css';
import isAuthenticated from '../../Auth/isAuthenticated';
import axios from 'axios';
class PaypalButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showButton: false,
        };

        window.React = React;
        window.ReactDOM = ReactDOM;
    }

    componentDidMount() {
        const {
            isScriptLoaded,
            isScriptLoadSucceed
        } = this.props;

        if (isScriptLoaded && isScriptLoadSucceed) {
            this.setState({ showButton: true });
        }
    }

    componentWillReceiveProps(nextProps) {
        const {
            isScriptLoaded,
            isScriptLoadSucceed,
        } = nextProps;

        const isLoadedButWasntLoadedBefore =
            !this.state.showButton &&
            !this.props.isScriptLoaded &&
            isScriptLoaded;

        if (isLoadedButWasntLoadedBefore) {
            if (isScriptLoadSucceed) {
                this.setState({ showButton: true });
            }
        }
    }

    

    render() {
        const ReactButton = paypal.Button.driver('react', {React,ReactDOM});
        const {
            total,
            currency,
            env,
            commit,
            client,
            onSuccess,
            onError,
            onCancel,
            items
        } = this.props;

        const {
            showButton,
        } = this.state;

        const payment = (data, actions) => {
            return axios.post(`http://ts.ausgrads.academy:8765/products/paypal/make/payment/`, {
                items,
                total,
                currency
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(function(res) {
                // 3. Return res.id from the response
                return res.data.id;
            });
        }

        const onAuthorize = (data, actions) =>{
            console.log(data);
            // 2. Make a request to your server
            return actions.request.post('http://ts.ausgrads.academy:8765/products/paypal/complete/payment/', {
                paymentID: data.paymentID,
                payerID:   data.payerID
            })
                .then(function(res) {
                // 3. Show the buyer a confirmation message.
                    console.log(res);
                });
        }

        let paypal1={
            shape: 'rect',
            tagline: 'false',
            size: 'medium'
        };
        return (
            <div  style={{marginTop: "4%"}}>
                {showButton && <paypal.Button.react style={paypal1}
                    env={env}
                    client={client}
                    commit={commit}
                    payment={payment}
                    onAuthorize={onAuthorize}
                    onCancel={onCancel}
                    onError={onError}
                />}
            </div>
        );
    }
}

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);