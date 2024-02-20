import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment as env, environment } from '../environments/environment';
import { AuthModule } from '@auth0/auth0-angular';
import { NgxStripeModule } from 'ngx-stripe';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetPhotosComponent } from './components/get-photos/get-photos.component';
import { UserService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { GetPhotosService } from './services/get-photos.service';
import { httpInterceptorProviders } from './core/interceptors';
import { LoginButtonComponent } from './components/Authentication/login-button/login-button.component';
import { SignupButtonComponent } from './components/Authentication/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/Authentication/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/Authentication/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/Authentication/auth-nav/auth-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        GetPhotosComponent,
        LoginButtonComponent,
        SignupButtonComponent,
        LogoutButtonComponent,
        AuthenticationButtonComponent,
        AuthNavComponent,
        NavBarComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        AuthModule.forRoot({
            domain: process.env.AUTH0_DOMAIN,
            clientId: process.env.AUTH0_CLIENT_ID,
            authorizationParams: {
                redirect_uri: process.env.AUTH0_CALLBACK_URL,
            },
        }),
        AppRoutingModule,
        NgxStripeModule.forRoot(process.env.stripe_test_pk),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
    ],
    providers: [GetPhotosService, UserService, httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
