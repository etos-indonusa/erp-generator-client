import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartListComponent } from './part-list/part-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PartListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartRoutingModule { }
