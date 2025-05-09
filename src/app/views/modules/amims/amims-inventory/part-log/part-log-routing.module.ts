import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartLogListComponent } from './part-log-list/part-log-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PartLogListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartLogRoutingModule { }
