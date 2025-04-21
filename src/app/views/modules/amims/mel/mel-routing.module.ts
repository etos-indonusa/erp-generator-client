import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MelListComponent } from './mel-list/mel-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: MelListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MelRoutingModule { }
