import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerPrisReturnItemListComponent } from './engineer-pris-return-item-list/engineer-pris-return-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: EngineerPrisReturnItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EngineerPrisReturnItemRoutingModule { }
