import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FigureIndexShareAddComponent } from './figure-index-share-add/figure-index-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { FigureIndexShareDetailComponent } from './figure-index-share-detail/figure-index-share-detail.component';
 
 
@NgModule({
    declarations: [
        FigureIndexShareAddComponent, 
        FigureIndexShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class FigureIndexShareModule { }
