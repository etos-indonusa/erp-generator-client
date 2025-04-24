import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpcGseListComponent } from './mpc-gse-list/mpc-gse-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: MpcGseListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpcGseRoutingModule { }
