import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteShareAddComponent } from './site-share-add/site-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { SiteShareDetailComponent } from './site-share-detail/site-share-detail.component';
 
 
@NgModule({
    declarations: [
        SiteShareAddComponent, 
        SiteShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class SiteShareModule { }
