import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetPhotosComponent } from './components/get-photos/get-photos.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';
import { UserService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { GetPhotosService } from './services/get-photos.service';
import { httpInterceptorProviders } from './core/interceptors';

@NgModule({
    declarations: [AppComponent, GetPhotosComponent, RegistrationComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
    ],
    providers: [GetPhotosService, UserService, httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
