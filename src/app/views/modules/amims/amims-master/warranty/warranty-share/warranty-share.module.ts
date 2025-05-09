import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarrantyShareAddComponent } from './warranty-share-add/warranty-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { WarrantyShareDetailComponent } from './warranty-share-detail/warranty-share-detail.component';
 
 
@NgModule({
    declarations: [
        WarrantyShareAddComponent, 
        WarrantyShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class WarrantyShareModule { }
