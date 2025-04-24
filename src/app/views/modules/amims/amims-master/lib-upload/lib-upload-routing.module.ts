import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibUploadListComponent } from './lib-upload-list/lib-upload-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: LibUploadListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LibUploadRoutingModule { }
