import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import scriptLoader from 'react-async-script-loader';
import paypal from 'paypal-checkout';
import './ProductSingle.css';
import isAuthenticated from '../../Auth/isAuthenticated';

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
        } = this.props;

        const {
            showButton,
        } = this.state;

        const payment = () =>
            paypal.rest.payment.create(
                'sandbox', client, {
                transactions: [
                    {
                        amount: {
                            total,
                            currency,
                        },
                        item_list: {
                            items: [{
                                name: 'hat',
                                description: 'brown hat',
                                quantity: '1',
                                price: '499',
                                sku: '1',
                                currency: 'AUD'
                            }]
                        }
                    },
                ],
                    redirect_urls: {
                        cancel_url:'http://ts.ausgrads.academy'
                    }
            });

        const onAuthorize = (data, actions) =>{
            actions.payment.get().then(function(data) {
                console.log(data);
                const name= data.payer.payer_info.shipping_address.recipient_name;
                actions.payment.execute()
                    .then(() => {
                        const payment = {
                            paid: true,
                            cancelled: false,
                            payerID: data.payerID,
                            paymentID: data.paymentID,
                            paymentToken: data.paymentToken,
                            returnUrl: data.returnUrl
                        };
                        onSuccess(payment,name);
                    });
            });
        }

        let paypal1={
            color: 'gold',
            shape: 'pill',
            tagline: 'false',
            label: 'buynow',
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