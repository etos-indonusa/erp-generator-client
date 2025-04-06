import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KantorListComponent } from './kantor-list/kantor-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: KantorListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KantorRoutingModule { }
