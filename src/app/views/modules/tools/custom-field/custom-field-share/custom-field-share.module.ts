import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFieldShareAddComponent } from './custom-field-share-add/custom-field-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { CustomFieldShareDetailComponent } from './custom-field-share-detail/custom-field-share-detail.component';
 
 
@NgModule({
    declarations: [
        CustomFieldShareAddComponent, 
        CustomFieldShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class CustomFieldShareModule { }
