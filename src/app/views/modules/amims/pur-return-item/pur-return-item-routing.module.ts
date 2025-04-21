import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurReturnItemListComponent } from './pur-return-item-list/pur-return-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PurReturnItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurReturnItemRoutingModule { }
