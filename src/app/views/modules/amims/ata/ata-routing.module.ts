import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtaListComponent } from './ata-list/ata-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: AtaListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtaRoutingModule { }
