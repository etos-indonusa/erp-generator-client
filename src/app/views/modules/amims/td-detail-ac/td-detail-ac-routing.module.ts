import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdDetailAcListComponent } from './td-detail-ac-list/td-detail-ac-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TdDetailAcListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TdDetailAcRoutingModule { }
