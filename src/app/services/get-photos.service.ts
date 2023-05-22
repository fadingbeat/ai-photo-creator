import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root',
})
export class GetPhotosService {
    public value = '';
    createPhotos = async (description: string) => {
        const url = `.netlify/functions/get-photos-model?prompt=${description}`;
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (error) {
            return {
                statusCode: status,
                body: JSON.stringify({ error }),
            };
        }
    };
}
