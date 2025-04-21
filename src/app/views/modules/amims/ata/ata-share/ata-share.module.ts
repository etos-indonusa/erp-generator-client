import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtaShareAddComponent } from './ata-share-add/ata-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { AtaShareDetailComponent } from './ata-share-detail/ata-share-detail.component';
 
 
@NgModule({
    declarations: [
        AtaShareAddComponent, 
        AtaShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class AtaShareModule { }
