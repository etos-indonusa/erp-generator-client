import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreTransferItemListComponent } from './store-transfer-item-list/store-transfer-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: StoreTransferItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreTransferItemRoutingModule { }
