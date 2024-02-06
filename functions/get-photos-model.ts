import { Handler } from '@netlify/functions';
import { Configuration, OpenAIApi } from 'openai';

export const handler: Handler = async (event) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const prompt = event.queryStringParameters?.prompt || 'Violet flame';
    const freeQuota = parseFloat(event.queryStringParameters?.freeQuota || '0');

    try {
        const data = await openai.createImage({
            prompt,
            n: 1,
            size: '256x256',
        });
        if (freeQuota >= Number(process.env.FREE_QUOTA)) {
            return {
                statusCode: 403, // Forbidden
                body: JSON.stringify({ message: 'Access forbidden' }),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify({ data: data.data }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message,
            }),
        };
    }
};
