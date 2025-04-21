import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerRtiIdentifyListComponent } from './engineer-rti-identify-list/engineer-rti-identify-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: EngineerRtiIdentifyListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EngineerRtiIdentifyRoutingModule { }
