const dev = {
    auth0: {
        callbackUri: "http://localhost:3000/callback"
    },
    paypal:{
        sandbox:"AVlMwaZN5ULXHv7Eslxqi-ZftwWjYVmxcedrjgPNI-KfTIqZsqh861lyFh4uH2ZQ8eFRIJLbqRXr0wv6",
        createUrl:"http://localhost:5555/paypal/make/payment/",
        completeUrl:"http://localhost:5555/paypal/complete/payment/"
    },
    endpoints: {
        cart: 'http://localhost:5555/cart',
        category: 'http://localhost:3333',
        product: 'http://localhost:5555',
        user: 'http://localhost:6666',
        images: ''
    }
}

const devprod = {
    auth0: {
        callbackUri: "http://localhost:3000/callback"
    },
    paypal:{
        sandbox:"AVlMwaZN5ULXHv7Eslxqi-ZftwWjYVmxcedrjgPNI-KfTIqZsqh861lyFh4uH2ZQ8eFRIJLbqRXr0wv6",
        createUrl:`http://ts.ausgrads.academy:8765/products/paypal/make/payment/`,
        completeUrl:`http://ts.ausgrads.academy:8765/products/paypal/complete/payment/`
    },
    endpoints: {
        cart: 'http://ts.ausgrads.academy:8765/products/cart',
        category: 'http://ts.ausgrads.academy:8765/categories',
        product: 'http://ts.ausgrads.academy:8765/products',
        user: 'http://ts.ausgrads.academy:8765/user',
        images: ''
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
    },
    endpoints: {
        cart: 'http://ts.ausgrads.academy:8765/products/cart',
        category: 'http://ts.ausgrads.academy:8765/categories',
        product: 'http://ts.ausgrads.academy:8765/products',
        user: 'http://ts.ausgrads.academy:8765/user',
        images: ''
    }
}

let config = {};
if (process.env.REACT_APP_STAGE === 'production') {
    config = prod;
} else if (process.env.REACT_APP_STAGE === 'devprod') {
    config = devprod;
} else {
    config = dev;
}

export default {
    ...config
}