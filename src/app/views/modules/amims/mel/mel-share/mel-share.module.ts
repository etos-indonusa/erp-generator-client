import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MelShareAddComponent } from './mel-share-add/mel-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { MelShareDetailComponent } from './mel-share-detail/mel-share-detail.component';
 
 
@NgModule({
    declarations: [
        MelShareAddComponent, 
        MelShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class MelShareModule { }
