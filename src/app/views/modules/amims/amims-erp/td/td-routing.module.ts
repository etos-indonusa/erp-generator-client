import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdListComponent } from './td-list/td-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TdListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TdRoutingModule { }
