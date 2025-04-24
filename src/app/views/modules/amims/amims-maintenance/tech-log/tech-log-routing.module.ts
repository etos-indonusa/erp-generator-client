import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechLogListComponent } from './tech-log-list/tech-log-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TechLogListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TechLogRoutingModule { }
