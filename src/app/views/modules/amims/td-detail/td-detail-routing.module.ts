import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdDetailListComponent } from './td-detail-list/td-detail-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TdDetailListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TdDetailRoutingModule { }
