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
                path: 'tools',
                loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule)
            },
            {
                path: 'acl',
                loadChildren: () => import('./acl/acl.module').then(m => m.AclModule)
            },
            {
                path: 'tools',
                loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'amims',
                loadChildren: () => import('./amims/amims.module').then(m => m.AmimsModule)
            },
            
              
 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }
