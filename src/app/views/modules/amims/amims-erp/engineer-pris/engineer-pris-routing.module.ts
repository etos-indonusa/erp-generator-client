import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerPrisListComponent } from './engineer-pris-list/engineer-pris-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: EngineerPrisListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EngineerPrisRoutingModule { }
