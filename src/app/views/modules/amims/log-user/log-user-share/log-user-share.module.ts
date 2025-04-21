import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogUserShareAddComponent } from './log-user-share-add/log-user-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { LogUserShareDetailComponent } from './log-user-share-detail/log-user-share-detail.component';
 
 
@NgModule({
    declarations: [
        LogUserShareAddComponent, 
        LogUserShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class LogUserShareModule { }
