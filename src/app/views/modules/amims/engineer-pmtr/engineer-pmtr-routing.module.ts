import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerPmtrListComponent } from './engineer-pmtr-list/engineer-pmtr-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: EngineerPmtrListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EngineerPmtrRoutingModule { }
