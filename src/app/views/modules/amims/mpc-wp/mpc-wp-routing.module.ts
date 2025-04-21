import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpcWpListComponent } from './mpc-wp-list/mpc-wp-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: MpcWpListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpcWpRoutingModule { }
