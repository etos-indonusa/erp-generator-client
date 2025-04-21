import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionListComponent } from './position-list/position-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PositionListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PositionRoutingModule { }
