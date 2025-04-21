import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechLogItemListComponent } from './tech-log-item-list/tech-log-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TechLogItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TechLogItemRoutingModule { }
