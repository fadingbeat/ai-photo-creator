export const environment = {
    production: false,
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    authorizationParams: {
        redirect_uri: process.env.AUTH0_CALLBACK_URL_NETLIFY_LOCAL,
    },
    // for testing client side code while in test mode
    stripe_test_pk: process.env.STRIPE_TEST_PUBLISHABLE_KEY,
    // for testing server code while in test mode
    stripe_test_sk: process.env.STRIPE_TEST_SECRET_KEY,
};
