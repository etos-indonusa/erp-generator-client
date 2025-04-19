import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthGuard } from 'src/libs/auth/guards/auth.guard'; 
import { LayoutWrapperComponent } from './views/layout/layout-wrapper/layout-wrapper.component';

export const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./views/auth/auth.module').then(m=>m.AuthModule) },
    {
        path: 'app',
        loadChildren: () => import('./views/modules/modules.module').then(m => m.ModulesModule)
    },
    {
        path: '',
        // component: BaseComponent, 
        component: LayoutWrapperComponent, 
        canActivate:[AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => import('./views/pages/dashboard/dashboard.routes')
            },
            {
                path: 'apps',
                loadChildren: () => import('./views/pages/apps/apps.routes')
            },
            {
                path: 'ui-components',
                loadChildren: () => import('./views/pages/ui-components/ui-components.routes')
            },
            {
                path: 'advanced-ui',
                loadChildren: () => import('./views/pages/advanced-ui/advanced-ui.routes')
            },
            {
                path: 'forms',
                loadChildren: () => import('./views/pages/forms/forms.routes')
            },
            {
                path: 'charts',
                loadChildren: () => import('./views/pages/charts/charts.routes')
            },
            {
                path: 'tables',
                loadChildren: () => import('./views/pages/tables/tables.routes')
            },
            {
                path: 'icons',
                loadChildren: () => import('./views/pages/icons/icons.routes')
            },
            {
                path: 'general',
                loadChildren: () => import('./views/pages/general/general.routes')
            }
        ]
    },
    {
        path: 'error',
        loadComponent: () => import('./views/pages/error/error.component').then(c => c.ErrorComponent),
    },
    {
        path: 'error/:type',
        loadComponent: () => import('./views/pages/error/error.component').then(c => c.ErrorComponent)
    },
    { path: '**', redirectTo: 'error/404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
