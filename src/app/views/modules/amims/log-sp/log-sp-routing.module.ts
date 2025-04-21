import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogSpListComponent } from './log-sp-list/log-sp-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: LogSpListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogSpRoutingModule { }
