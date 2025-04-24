import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartActypeListComponent } from './part-actype-list/part-actype-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PartActypeListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartActypeRoutingModule { }
