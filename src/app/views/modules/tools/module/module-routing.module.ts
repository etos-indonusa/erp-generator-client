import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleListComponent } from './module-list/module-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ModuleListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModuleRoutingModule { }
