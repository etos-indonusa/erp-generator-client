import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotListComponent } from './pilot-list/pilot-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PilotListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PilotRoutingModule { }
