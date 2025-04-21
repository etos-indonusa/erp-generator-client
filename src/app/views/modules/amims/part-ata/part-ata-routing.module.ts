import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartAtaListComponent } from './part-ata-list/part-ata-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PartAtaListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartAtaRoutingModule { }
