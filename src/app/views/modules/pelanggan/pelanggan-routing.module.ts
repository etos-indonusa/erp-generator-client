import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
        path: 'invoice',
        loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PelangganRoutingModule { }
