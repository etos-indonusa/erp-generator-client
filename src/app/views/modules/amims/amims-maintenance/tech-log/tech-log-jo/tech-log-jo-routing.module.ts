import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechLogJoListComponent } from './tech-log-jo-list/tech-log-jo-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TechLogJoListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TechLogJoRoutingModule { }
