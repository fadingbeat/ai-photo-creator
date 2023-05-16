import { Handler } from '@netlify/functions';
import { Configuration, OpenAIApi } from 'openai';

export const handler = async () => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    console.log('here');
    // const imageRequest = {
    //     prompt: 'Beautiful angel woman with long blond purple hair',
    //     n: 2,
    // };
    try {
        const data = await openai.createImage({
            prompt: 'Beautiful angel woman with long blond purple hair',
            n: 1,
        });
        console.log('response', data);
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
