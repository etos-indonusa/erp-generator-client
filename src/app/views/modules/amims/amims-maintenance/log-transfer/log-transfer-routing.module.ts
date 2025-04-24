import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogTransferListComponent } from './log-transfer-list/log-transfer-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: LogTransferListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogTransferRoutingModule { }
