import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { ImagesInfo } from '../models/images';

@Injectable({
    providedIn: 'root',
})
export class GetPhotosService {
    constructor(private http: HttpClient) {}
    getPhotos = (
        description: string,
        freeQuota: number
    ): Observable<ImagesInfo> => {
        const url = `.netlify/functions/get-photos-model?prompt=${description}&freeQuota=${freeQuota}`;

        return this.http.get<ImagesInfo>(url);
    };
}
