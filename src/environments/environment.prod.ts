export const environment = {
    production: true,
    auth0: {
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: process.env.AUTH0_CALLBACK_URL_NETLIFY_LOCAL,
        },
    },
};
