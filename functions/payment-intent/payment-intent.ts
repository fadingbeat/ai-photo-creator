import { Handler } from '@netlify/functions';
import { Stripe } from '@stripe/stripe-js';

export const handler: Handler = async (event, context) => {
    const name = event.queryStringParameters;
    const STSK = process.env.STRIPE_TEST_SECRET_KEY;

    // Set your secret key. Remember to switch to your live secret key in production.
    // See your keys here: https://dashboard.stripe.com/apikeys
    const stripe = require('stripe')(STSK);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'eur',
        automatic_payment_methods: {
            enabled: true,
        },
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: paymentIntent,
        }),
    };
};
