import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentNumberingCounterListComponent } from './document-numbering-counter-list/document-numbering-counter-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: DocumentNumberingCounterListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocumentNumberingCounterRoutingModule { }
