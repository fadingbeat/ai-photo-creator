// quota-interceptor.ts
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpClient,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Injectable()
export class QuotaInterceptor implements HttpInterceptor {
    constructor(private userService: UserService, private router: Router) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        try {
            console.log('Outgoing HTTP request', request);
            if (this.userService.hasExceededFreeQuota()) {
                // Optionally, handle the case where the user has exceeded the free quota.
                // Redirect to registration / login page
                // this.router.navigate(['/registration']).then(() => {
                //     window.location.reload();
                // });
                console.log(
                    'User has exceeded the free quota. Request blocked.'
                );
            }

            return next.handle(request).pipe(
                catchError((error: HttpErrorResponse) => {
                    // Handle errors if needed
                    console.error('Request error:', error);
                    return throwError(error);
                })
            );
        } catch (error) {
            console.log(error);
        }

        return new Observable();
    }
}

// import { Injectable } from '@angular/core';
// import {
//     HttpEvent,
//     HttpInterceptor,
//     HttpHandler,
//     HttpRequest,
//     HttpResponse,
// } from '@angular/common/http';
// import { Observable, tap } from 'rxjs';

// @Injectable()
// export class NoopInterceptor implements HttpInterceptor {
//     constructor() {}

//     intercept(
//         request: HttpRequest<any>,
//         next: HttpHandler
//     ): Observable<HttpEvent<any>> {
//         console.log('Outgoing HTTP request', request);
//         return next.handle(request).pipe(
//             tap((event: HttpEvent<any>) => {
//                 console.log('Incoming HTTP response', event);
//             })
//         );
//     }
// }
