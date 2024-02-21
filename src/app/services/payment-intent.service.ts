import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PaymentIntentService {
    constructor(private http: HttpClient) {}
    getPaymentIntent = () => {
        const url = `.netlify/functions/payment-intent`;
        return this.http.get(url);
    };
}
