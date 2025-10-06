import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkCompletedListComponent } from './work-completed-list/work-completed-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: WorkCompletedListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkCompletedRoutingModule { }
