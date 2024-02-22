import { Component, OnInit } from '@angular/core';
import { StripeElementsOptions } from '@stripe/stripe-js';
import { StripeFactoryService } from 'ngx-stripe';
import { PaymentIntent } from 'src/app/models/paymentIntent';
import { PaymentIntentService } from 'src/app/services/payment-intent.service';
import { environment as env } from '../../../environments/environment';

@Component({
    selector: 'app-payment-element',
    templateUrl: './payment-element.component.html',
    styleUrl: './payment-element.component.scss',
})
export class PaymentElementComponent implements OnInit {
    clientSecret = '';
    constructor(
        private factoryService: StripeFactoryService,
        private paymentIntentService: PaymentIntentService
    ) {}

    ngOnInit() {
        this.paymentIntentService.getPaymentIntent().subscribe((res) => {
            console.log('payment intent object', res);
            this.clientSecret = res.message.client_secret;
            console.log(this.clientSecret);
        });
    }
}
