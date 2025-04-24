import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerRtiPartListComponent } from './engineer-rti-part-list/engineer-rti-part-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: EngineerRtiPartListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EngineerRtiPartRoutingModule { }
