import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreTransferListComponent } from './store-transfer-list/store-transfer-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: StoreTransferListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreTransferRoutingModule { }
