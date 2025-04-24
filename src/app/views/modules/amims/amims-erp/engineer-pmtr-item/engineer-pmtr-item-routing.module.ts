import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerPmtrItemListComponent } from './engineer-pmtr-item-list/engineer-pmtr-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: EngineerPmtrItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EngineerPmtrItemRoutingModule { }
