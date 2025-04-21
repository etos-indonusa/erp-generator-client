import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDestroyListComponent } from './store-destroy-list/store-destroy-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: StoreDestroyListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreDestroyRoutingModule { }
