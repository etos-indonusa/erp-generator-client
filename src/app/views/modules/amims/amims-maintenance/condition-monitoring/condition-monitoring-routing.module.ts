import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionMonitoringListComponent } from './condition-monitoring-list/condition-monitoring-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ConditionMonitoringListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConditionMonitoringRoutingModule { }
