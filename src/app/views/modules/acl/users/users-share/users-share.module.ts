import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { UsersShareAddComponent } from './users-share-add/users-share-add.component';
import { UsersShareDetailComponent } from './users-share-detail/users-share-detail.component'; 
import { UsersShareWidgetComponent } from './users-share-widget/users-share-widget.component';
import { UsersShareListComponent } from './users-share-list/users-share-list.component';
import { UsersShareHeaderComponent } from './users-share-header/users-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    UsersShareAddComponent,
    UsersShareDetailComponent,
    UsersShareListComponent,
    UsersShareHeaderComponent,
    UsersShareWidgetComponent
]

@NgModule({
    declarations: [
        ...COM,
    ],
    exports: [
        ...COM
    ], 
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule,
        RouterModule,
        // ApprovalModule,
        CustomFieldValueShareModule
    ]
}) 
export class UsersShareModule { }
