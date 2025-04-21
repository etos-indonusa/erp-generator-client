import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QaRpdDispotitionListComponent } from './qa-rpd-dispotition-list/qa-rpd-dispotition-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: QaRpdDispotitionListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QaRpdDispotitionRoutingModule { }
