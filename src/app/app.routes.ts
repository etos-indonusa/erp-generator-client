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
