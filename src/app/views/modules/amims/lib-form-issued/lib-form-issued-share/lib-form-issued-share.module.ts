import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibFormIssuedShareAddComponent } from './lib-form-issued-share-add/lib-form-issued-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { LibFormIssuedShareDetailComponent } from './lib-form-issued-share-detail/lib-form-issued-share-detail.component';
 
 
@NgModule({
    declarations: [
        LibFormIssuedShareAddComponent, 
        LibFormIssuedShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class LibFormIssuedShareModule { }
