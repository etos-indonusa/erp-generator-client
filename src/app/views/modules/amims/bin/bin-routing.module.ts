import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinListComponent } from './bin-list/bin-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: BinListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BinRoutingModule { }
