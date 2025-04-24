import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartDetailComponent } from './part-detail/part-detail.component';
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
    },
    {
        path: 'detail/:id_part',
        component: PartDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartRoutingModule { }
