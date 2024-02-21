import { Component } from '@angular/core';
import { StripeElementsOptions } from '@stripe/stripe-js';
import { StripeFactoryService } from 'ngx-stripe';
import { environment as env } from '../../../environments/environment';

@Component({
    selector: 'app-payment-element',
    templateUrl: './payment-element.component.html',
    styleUrl: './payment-element.component.scss',
})
export class PaymentElementComponent {
    constructor(private factoryService: StripeFactoryService) {}
    stripe = this.factoryService.create(env.stripe_test_pk);
    elementsOptions: StripeElementsOptions = {
        locale: 'en',
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
    };
}
