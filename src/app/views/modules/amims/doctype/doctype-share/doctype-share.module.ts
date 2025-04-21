import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctypeShareAddComponent } from './doctype-share-add/doctype-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { DoctypeShareDetailComponent } from './doctype-share-detail/doctype-share-detail.component';
 
 
@NgModule({
    declarations: [
        DoctypeShareAddComponent, 
        DoctypeShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class DoctypeShareModule { }
