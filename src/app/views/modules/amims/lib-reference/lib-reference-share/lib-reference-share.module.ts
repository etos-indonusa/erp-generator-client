import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibReferenceShareAddComponent } from './lib-reference-share-add/lib-reference-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { LibReferenceShareDetailComponent } from './lib-reference-share-detail/lib-reference-share-detail.component';
 
 
@NgModule({
    declarations: [
        LibReferenceShareAddComponent, 
        LibReferenceShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class LibReferenceShareModule { }
