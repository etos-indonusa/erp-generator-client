import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurPoListComponent } from './pur-po-list/pur-po-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PurPoListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurPoRoutingModule { }
