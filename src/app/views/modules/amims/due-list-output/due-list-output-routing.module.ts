import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DueListOutputListComponent } from './due-list-output-list/due-list-output-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: DueListOutputListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DueListOutputRoutingModule { }
