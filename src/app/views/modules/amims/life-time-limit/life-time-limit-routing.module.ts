import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeTimeLimitListComponent } from './life-time-limit-list/life-time-limit-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: LifeTimeLimitListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LifeTimeLimitRoutingModule { }
