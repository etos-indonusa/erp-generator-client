import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DueListListComponent } from './due-list-list/due-list-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: DueListListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DueListRoutingModule { }
