const dev = {
    auth0: {
        callbackUri: "http://localhost:3000/callback"
    },
    paypal:{
        sandbox:"AVlMwaZN5ULXHv7Eslxqi-ZftwWjYVmxcedrjgPNI-KfTIqZsqh861lyFh4uH2ZQ8eFRIJLbqRXr0wv6",
        createUrl:"http://localhost:5555/paypal/make/payment/",
        completeUrl:"http://localhost:5555/paypal/complete/payment/"
    }
}

const prod = {
    auth0: {
        callbackUri: "http://ts.ausgrads.academy/callback"
    },
    paypal:{
        sandbox:"AVlMwaZN5ULXHv7Eslxqi-ZftwWjYVmxcedrjgPNI-KfTIqZsqh861lyFh4uH2ZQ8eFRIJLbqRXr0wv6",
        createUrl:"http://ts.ausgrads.academy:8765/products/paypal/make/payment/",
        completeUrl:"http://ts.ausgrads.academy:8765/products/paypal/complete/payment/"
    }
}

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default {
    ...config
}