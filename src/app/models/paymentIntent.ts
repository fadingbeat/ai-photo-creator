export interface Message {
    id: string;
    object: string;
    amount: number;
    amount_capturable: number;
    amount_details: {
        tip: {};
    };
    amount_received: number;
    application: null | any;
    application_fee_amount: null | any;
    automatic_payment_methods: {
        allow_redirects: string;
        enabled: boolean;
    };
    canceled_at: null | any;
    cancellation_reason: null | any;
    capture_method: string;
    client_secret: string;
    confirmation_method: string;
    created: number;
    currency: string;
    customer: null | any;
    description: null | any;
    invoice: null | any;
    last_payment_error: null | any;
    latest_charge: null | any;
    livemode: boolean;
    metadata: {};
    next_action: null | any;
    on_behalf_of: null | any;
    payment_method: null | any;
    payment_method_configuration_details: null | any;
    payment_method_options: {
        card: {
            installments: null | any;
            mandate_options: null | any;
            network: null | any;
            request_three_d_secure: string;
        };
    };
    payment_method_types: string[];
    processing: null | any;
    receipt_email: null | any;
    review: null | any;
    setup_future_usage: null | any;
    shipping: null | any;
    source: null | any;
    statement_descriptor: null | any;
    statement_descriptor_suffix: null | any;
    status: string;
    transfer_data: null | any;
    transfer_group: null | any;
}

export interface PaymentIntent {
    message: Message;
}
