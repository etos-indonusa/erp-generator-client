import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QaTransferItemListComponent } from './qa-transfer-item-list/qa-transfer-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: QaTransferItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QaTransferItemRoutingModule { }
