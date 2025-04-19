import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'workflow-log',
        loadChildren: () => import('./workflow-log/workflow-log.module').then(m => m.WorkflowLogModule)
    },
    {
        path: 'workflow-step',
        loadChildren: () => import('./workflow-step/workflow-step.module').then(m => m.WorkflowStepModule)
    },
    {
        path: 'workflow',
        loadChildren: () => import('./workflow/workflow.module').then(m => m.WorkflowModule)
    },
    {
        path: 'custom-field',
        loadChildren: () => import('./custom-field/custom-field.module').then(m => m.CustomFieldModule)
    },
    {
        path: 'custom-field-group',
        loadChildren: () => import('./custom-field-group/custom-field-group.module').then(m => m.CustomFieldGroupModule)
    },
    {
        path: 'module',
        loadChildren: () => import('./module/module.module').then(m => m.ModuleModule)
    },
    {
        path: 'document-numbering',
        loadChildren: () => import('./document-numbering/document-numbering.module').then(m => m.DocumentNumberingModule)
    },
    {
        path: 'document-numbering-counter',
        loadChildren: () => import('./document-numbering-counter/document-numbering-counter.module').then(m => m.DocumentNumberingCounterModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
