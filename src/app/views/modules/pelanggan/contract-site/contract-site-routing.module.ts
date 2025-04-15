import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractSiteListComponent } from './contract-site-list/contract-site-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ContractSiteListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContractSiteRoutingModule { }
