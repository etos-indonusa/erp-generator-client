import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdRefListComponent } from './td-ref-list/td-ref-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TdRefListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TdRefRoutingModule { }
