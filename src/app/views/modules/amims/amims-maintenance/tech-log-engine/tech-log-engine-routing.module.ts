import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechLogEngineListComponent } from './tech-log-engine-list/tech-log-engine-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TechLogEngineListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TechLogEngineRoutingModule { }
