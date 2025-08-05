import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VDueListOutputListComponent } from './v-due-list-output-list/v-due-list-output-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: VDueListOutputListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VDueListOutputRoutingModule { }
