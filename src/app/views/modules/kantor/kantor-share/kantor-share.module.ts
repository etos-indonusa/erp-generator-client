import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KantorShareAddComponent } from './kantor-share-add/kantor-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module'; 
import { TampilanModule } from '../../../../shared/tampilan.module';
import { KantorShareDetailComponent } from './kantor-share-detail/kantor-share-detail.component';
 
 
@NgModule({
    declarations: [
        KantorShareAddComponent, 
        KantorShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class KantorShareModule { }
