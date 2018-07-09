const dev = {
    auth0: {
        callbackUri: "http://localhost:3000/callback"
    },
    paypal:{
        sandbox:"AVlMwaZN5ULXHv7Eslxqi-ZftwWjYVmxcedrjgPNI-KfTIqZsqh861lyFh4uH2ZQ8eFRIJLbqRXr0wv6"
    }
}

const prod = {
    auth0: {
        callbackUri: "http://ts.ausgrads.academy/callback"
    },
    paypal:{
        sandbox:"AVlMwaZN5ULXHv7Eslxqi-ZftwWjYVmxcedrjgPNI-KfTIqZsqh861lyFh4uH2ZQ8eFRIJLbqRXr0wv6"
    }
}

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default {
    ...config
}