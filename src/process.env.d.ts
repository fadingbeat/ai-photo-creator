export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;
            AUTH0_CLIENT_ID: string;
            AUTH0_DOMAIN: string;
            AUTH0_CALLBACK_URL: string;
            AUTH0_CALLBACK_URL_NETLIFY_LOCAL: string;
            // add more environment variables and their types here
        }
    }
}
