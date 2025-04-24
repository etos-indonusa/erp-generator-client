import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastMaintenanceListComponent } from './last-maintenance-list/last-maintenance-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: LastMaintenanceListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LastMaintenanceRoutingModule { }
