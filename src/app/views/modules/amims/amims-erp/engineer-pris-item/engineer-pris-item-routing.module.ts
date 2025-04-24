import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerPrisItemListComponent } from './engineer-pris-item-list/engineer-pris-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: EngineerPrisItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EngineerPrisItemRoutingModule { }
