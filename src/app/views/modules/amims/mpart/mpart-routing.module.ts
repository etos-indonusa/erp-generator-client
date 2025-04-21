import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpartListComponent } from './mpart-list/mpart-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: MpartListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpartRoutingModule { }
