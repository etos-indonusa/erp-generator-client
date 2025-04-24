import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FigureIndexListComponent } from './figure-index-list/figure-index-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: FigureIndexListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FigureIndexRoutingModule { }
