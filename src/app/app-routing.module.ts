import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetPhotosComponent } from './components/get-photos/get-photos.component';

const routes: Routes = [
    {
        path: '',
        component: GetPhotosComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
