import { RegistrationComponent } from './components/registration/registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetPhotosComponent } from './components/get-photos/get-photos.component';
import { FreeQuotaGuard } from './core/guards/free-quota.guard';

const routes: Routes = [
    {
        path: 'generate-photos',
        component: GetPhotosComponent,
        canActivate: [FreeQuotaGuard],
    },
    {
        path: 'registration',
        component: RegistrationComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
