import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeOfworkListComponent } from './type-ofwork-list/type-ofwork-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TypeOfworkListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TypeOfworkRoutingModule { }
