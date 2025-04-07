import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractShareAddComponent } from './contract-share-add/contract-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module'; 
import { TampilanModule } from '../../../../shared/tampilan.module';
import { ContractShareDetailComponent } from './contract-share-detail/contract-share-detail.component';
 
 
@NgModule({
    declarations: [
        ContractShareAddComponent, 
        ContractShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class ContractShareModule { }
