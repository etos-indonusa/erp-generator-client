import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentNumberingListComponent } from './document-numbering-list/document-numbering-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: DocumentNumberingListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocumentNumberingRoutingModule { }
