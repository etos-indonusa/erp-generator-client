import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechLogEngineCheckListComponent } from './tech-log-engine-check-list/tech-log-engine-check-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TechLogEngineCheckListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TechLogEngineCheckRoutingModule { }
