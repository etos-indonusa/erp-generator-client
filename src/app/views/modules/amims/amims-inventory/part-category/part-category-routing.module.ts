import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartCategoryListComponent } from './part-category-list/part-category-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PartCategoryListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartCategoryRoutingModule { }
