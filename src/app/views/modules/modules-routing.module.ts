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
                path: 'workflow-log',
                loadChildren: () => import('./tools/workflow-log/workflow-log.module').then(m => m.WorkflowLogModule)
            },
            {
                path: 'workflow-step',
                loadChildren: () => import('./tools/workflow-step/workflow-step.module').then(m => m.WorkflowStepModule)
            },
            {
                path: 'workflow',
                loadChildren: () => import('./tools/workflow/workflow.module').then(m => m.WorkflowModule)
            },
            {
                path: 'contract',
                loadChildren: () => import('./pelanggan/contract/contract.module').then(m => m.ContractModule)
            },
            {
                path: 'contract-site',
                loadChildren: () => import('./pelanggan/contract-site/contract-site.module').then(m => m.ContractSiteModule)
            },
            {
                path: 'contract-jenis',
                loadChildren: () => import('./pelanggan/contract-jenis/contract-jenis.module').then(m => m.ContractJenisModule)
            },
            {
                path: 'invoice',
                loadChildren: () => import('./pelanggan/invoice/invoice.module').then(m => m.InvoiceModule)
            }, 
 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }
