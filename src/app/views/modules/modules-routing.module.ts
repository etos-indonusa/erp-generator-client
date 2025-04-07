import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from '../layout/base/base.component';

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'contract',
                loadChildren: () => import('./contract/contract.module').then(m => m.ContractModule)
            },
            {
                path: 'client',
                loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
            },
            {
                path: 'contract-site',
                loadChildren: () => import('./contract-site/contract-site.module').then(m => m.ContractSiteModule)
            }, 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }
