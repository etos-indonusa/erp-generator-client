import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractJenisListComponent } from './contract-jenis-list/contract-jenis-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ContractJenisListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContractJenisRoutingModule { }
