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
 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }
