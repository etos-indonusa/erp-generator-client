import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpcPiroListComponent } from './mpc-piro-list/mpc-piro-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: MpcPiroListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpcPiroRoutingModule { }
