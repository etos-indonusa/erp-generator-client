import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { SiteShareAddComponent } from './site-share-add/site-share-add.component';
import { SiteShareDetailComponent } from './site-share-detail/site-share-detail.component'; 
import { SiteShareWidgetComponent } from './site-share-widget/site-share-widget.component';
import { SiteShareListComponent } from './site-share-list/site-share-list.component';
import { SiteShareHeaderComponent } from './site-share-header/site-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';
import { PartShareModule } from "../../part/part-share/part-share.module";
import { BinShareModule } from "../../bin/bin-share/bin-share.module";

const COM = [
    SiteShareAddComponent,
    SiteShareDetailComponent,
    SiteShareListComponent,
    SiteShareHeaderComponent,
    SiteShareWidgetComponent
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
    CustomFieldValueShareModule,
    PartShareModule,
    BinShareModule
]
}) 
export class SiteShareModule { }
