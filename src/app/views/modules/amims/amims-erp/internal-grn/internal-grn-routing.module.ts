import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalGrnListComponent } from './internal-grn-list/internal-grn-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: InternalGrnListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InternalGrnRoutingModule { }
