import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentIntent } from '../models/paymentIntent';

@Injectable({
    providedIn: 'root',
})
export class PaymentIntentService {
    constructor(private http: HttpClient) {}
    getPaymentIntent = (): Observable<PaymentIntent> => {
        const url = `.netlify/functions/payment-intent`;
        return this.http.get<PaymentIntent>(url);
    };
}
