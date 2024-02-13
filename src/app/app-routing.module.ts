import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetPhotosComponent } from './components/get-photos/get-photos.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FreeQuotaGuard } from './core/guards/free-quota.guard';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
    {
        path: '',
        component: NavBarComponent,
    },
    {
        path: 'generate-photos',
        component: GetPhotosComponent,
        canActivate: [FreeQuotaGuard, AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
