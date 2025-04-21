import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpcPiroItemListComponent } from './mpc-piro-item-list/mpc-piro-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: MpcPiroItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpcPiroItemRoutingModule { }
