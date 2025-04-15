import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractJenisShareAddComponent } from './contract-jenis-share-add/contract-jenis-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { ContractJenisShareDetailComponent } from './contract-jenis-share-detail/contract-jenis-share-detail.component';
 
 
@NgModule({
    declarations: [
        ContractJenisShareAddComponent, 
        ContractJenisShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class ContractJenisShareModule { }
