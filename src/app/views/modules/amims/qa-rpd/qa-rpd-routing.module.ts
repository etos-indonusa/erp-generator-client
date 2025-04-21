import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QaRpdListComponent } from './qa-rpd-list/qa-rpd-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: QaRpdListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QaRpdRoutingModule { }
