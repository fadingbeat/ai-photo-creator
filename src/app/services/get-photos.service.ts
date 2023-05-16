import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root',
})
export class GetPhotosService {
    createPhotos = async () => {
        const url = '.netlify/functions/get-photos-model';
        try {
            const { data } = await axios.get(url);
            console.log('data', data);
            return data;
        } catch (error) {
            console.log('error', error);
            return {
                statusCode: status,
                body: JSON.stringify({ error }),
            };
        }
    };
}
