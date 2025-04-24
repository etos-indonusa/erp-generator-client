import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerRtiListComponent } from './engineer-rti-list/engineer-rti-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: EngineerRtiListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EngineerRtiRoutingModule { }
