import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpcJoOperatorListComponent } from './mpc-jo-operator-list/mpc-jo-operator-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: MpcJoOperatorListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpcJoOperatorRoutingModule { }
