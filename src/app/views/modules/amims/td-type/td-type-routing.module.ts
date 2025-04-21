import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdTypeListComponent } from './td-type-list/td-type-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TdTypeListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TdTypeRoutingModule { }
