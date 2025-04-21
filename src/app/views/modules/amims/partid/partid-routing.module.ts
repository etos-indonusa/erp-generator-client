import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidListComponent } from './partid-list/partid-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PartidListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartidRoutingModule { }
