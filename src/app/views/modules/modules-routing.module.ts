import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from '../layout/base/base.component';
import { LayoutWrapperComponent } from '../layout/layout-wrapper/layout-wrapper.component';

const routes: Routes = [
    {
        path: '',
        // component: BaseComponent,
        component: LayoutWrapperComponent, 
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
                path: 'invoice',
                loadChildren: () => import('./pelanggan/invoice/invoice.module').then(m => m.InvoiceModule)
            },
            {
                path: 'custom-field',
                loadChildren: () => import('./tools/custom-field/custom-field.module').then(m => m.CustomFieldModule)
            },
            {
                path: 'custom-field-group',
                loadChildren: () => import('./tools/custom-field-group/custom-field-group.module').then(m => m.CustomFieldGroupModule)
            }, 
            {
                path: 'module',
                loadChildren: () => import('./tools/module/module.module').then(m => m.ModuleModule)
            },
            {
                path: 'document-numbering',
                loadChildren: () => import('./tools/document-numbering/document-numbering.module').then(m => m.DocumentNumberingModule)
            },
            {
                path: 'document-numbering-counter',
                loadChildren: () => import('./tools/document-numbering-counter/document-numbering-counter.module').then(m => m.DocumentNumberingCounterModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./acl/users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'user-group',
                loadChildren: () => import('./acl/user-group/user-group.module').then(m => m.UserGroupModule)
            }, 
 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }
