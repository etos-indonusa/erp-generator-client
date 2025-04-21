import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogTransferShareAddComponent } from './log-transfer-share-add/log-transfer-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { LogTransferShareDetailComponent } from './log-transfer-share-detail/log-transfer-share-detail.component';
 
 
@NgModule({
    declarations: [
        LogTransferShareAddComponent, 
        LogTransferShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class LogTransferShareModule { }
