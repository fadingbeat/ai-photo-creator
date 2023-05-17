import { Handler } from '@netlify/functions';
import { Configuration, OpenAIApi } from 'openai';

export const handler: Handler = async (event, context) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const prompt = event.queryStringParameters?.prompt || 'Violet flame';
    try {
        const data = await openai.createImage({
            prompt,
            n: 1,
            size: '256x256',
        });
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