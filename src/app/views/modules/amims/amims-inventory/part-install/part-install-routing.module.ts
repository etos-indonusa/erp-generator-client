import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartInstallListComponent } from './part-install-list/part-install-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PartInstallListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartInstallRoutingModule { }
