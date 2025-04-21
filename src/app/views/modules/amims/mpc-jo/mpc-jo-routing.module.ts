import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpcJoListComponent } from './mpc-jo-list/mpc-jo-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: MpcJoListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpcJoRoutingModule { }
