import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpcSelfMaintenanceListComponent } from './mpc-self-maintenance-list/mpc-self-maintenance-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: MpcSelfMaintenanceListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpcSelfMaintenanceRoutingModule { }
