import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceCodeReferenceListComponent } from './maintenance-code-reference-list/maintenance-code-reference-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: MaintenanceCodeReferenceListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaintenanceCodeReferenceRoutingModule { }
