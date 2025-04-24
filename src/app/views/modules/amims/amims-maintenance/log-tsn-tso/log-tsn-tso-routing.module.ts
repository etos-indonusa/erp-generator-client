import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogTsnTsoListComponent } from './log-tsn-tso-list/log-tsn-tso-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: LogTsnTsoListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogTsnTsoRoutingModule { }
