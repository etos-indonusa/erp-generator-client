import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyShareAddComponent } from './company-share-add/company-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { CompanyShareDetailComponent } from './company-share-detail/company-share-detail.component';
 
 
@NgModule({
    declarations: [
        CompanyShareAddComponent, 
        CompanyShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class CompanyShareModule { }
