import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctypeListComponent } from './doctype-list/doctype-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: DoctypeListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoctypeRoutingModule { }
