import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PartCategoryShareAddComponent } from './part-category-share-add/part-category-share-add.component';
import { PartCategoryShareDetailComponent } from './part-category-share-detail/part-category-share-detail.component'; 
import { PartCategoryShareWidgetComponent } from './part-category-share-widget/part-category-share-widget.component';
import { PartCategoryShareListComponent } from './part-category-share-list/part-category-share-list.component';
import { PartCategoryShareHeaderComponent } from './part-category-share-header/part-category-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PartCategoryShareAddComponent,
    PartCategoryShareDetailComponent,
    PartCategoryShareListComponent,
    PartCategoryShareHeaderComponent,
    PartCategoryShareWidgetComponent
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
export class PartCategoryShareModule { }
