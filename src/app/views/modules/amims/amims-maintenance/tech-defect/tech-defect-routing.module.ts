import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechDefectListComponent } from './tech-defect-list/tech-defect-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TechDefectListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TechDefectRoutingModule { }
