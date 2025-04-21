import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibUploadShareAddComponent } from './lib-upload-share-add/lib-upload-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { LibUploadShareDetailComponent } from './lib-upload-share-detail/lib-upload-share-detail.component';
 
 
@NgModule({
    declarations: [
        LibUploadShareAddComponent, 
        LibUploadShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class LibUploadShareModule { }
