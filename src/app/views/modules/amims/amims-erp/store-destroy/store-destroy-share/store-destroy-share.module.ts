import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { StoreDestroyShareAddComponent } from './store-destroy-share-add/store-destroy-share-add.component';
import { StoreDestroyShareDetailComponent } from './store-destroy-share-detail/store-destroy-share-detail.component'; 
import { StoreDestroyShareWidgetComponent } from './store-destroy-share-widget/store-destroy-share-widget.component';
import { StoreDestroyShareListComponent } from './store-destroy-share-list/store-destroy-share-list.component';
import { StoreDestroyShareHeaderComponent } from './store-destroy-share-header/store-destroy-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    StoreDestroyShareAddComponent,
    StoreDestroyShareDetailComponent,
    StoreDestroyShareListComponent,
    StoreDestroyShareHeaderComponent,
    StoreDestroyShareWidgetComponent
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
export class StoreDestroyShareModule { }
