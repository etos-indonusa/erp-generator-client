import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartConditionListComponent } from './part-condition-list/part-condition-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PartConditionListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartConditionRoutingModule { }
