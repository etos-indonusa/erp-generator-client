import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurGrnItemListComponent } from './pur-grn-item-list/pur-grn-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PurGrnItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurGrnItemRoutingModule { }
