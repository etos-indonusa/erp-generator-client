import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnscheduleMaintenanceListComponent } from './unschedule-maintenance-list/unschedule-maintenance-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: UnscheduleMaintenanceListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnscheduleMaintenanceRoutingModule { }
