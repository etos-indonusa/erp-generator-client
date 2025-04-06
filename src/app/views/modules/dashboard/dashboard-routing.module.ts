import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalisaComponent } from './analisa/analisa.component';

const routes: Routes = [
    {
        path: '',
        component: AnalisaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
