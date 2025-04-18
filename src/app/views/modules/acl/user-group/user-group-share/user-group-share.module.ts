import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGroupShareAddComponent } from './user-group-share-add/user-group-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { UserGroupShareDetailComponent } from './user-group-share-detail/user-group-share-detail.component';
 
 
@NgModule({
    declarations: [
        UserGroupShareAddComponent, 
        UserGroupShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class UserGroupShareModule { }
