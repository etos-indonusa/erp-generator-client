import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartFigureIndexListComponent } from './part-figure-index-list/part-figure-index-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PartFigureIndexListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartFigureIndexRoutingModule { }
