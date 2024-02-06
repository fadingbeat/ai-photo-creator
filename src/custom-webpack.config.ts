const Dotenv = require('dotenv-webpack');

module.exports = {
    plugins: [
        new Dotenv({
            // path: `${environmentsPath}/.env.development`,
            systemvars: true,
        }),
    ],
    resolve: {
        fallback: {
            crypto: false,
            os: false,
            path: require.resolve('path-browserify'),
            stream: false,
        },
    },
};
