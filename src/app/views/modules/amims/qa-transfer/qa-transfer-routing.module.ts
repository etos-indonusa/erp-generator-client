import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QaTransferListComponent } from './qa-transfer-list/qa-transfer-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: QaTransferListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QaTransferRoutingModule { }
