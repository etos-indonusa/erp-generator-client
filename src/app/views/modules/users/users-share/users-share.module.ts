import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersShareAddComponent } from './users-share-add/users-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module'; 
import { TampilanModule } from '../../../../shared/tampilan.module';
import { UsersShareDetailComponent } from './users-share-detail/users-share-detail.component';
 
 
@NgModule({
    declarations: [
        UsersShareAddComponent, 
        UsersShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class UsersShareModule { }
