import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { QuotaInterceptor } from '../interceptors/quota-interceptor';

export const httpInterceptorProviders: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: QuotaInterceptor,
    multi: true,
};
