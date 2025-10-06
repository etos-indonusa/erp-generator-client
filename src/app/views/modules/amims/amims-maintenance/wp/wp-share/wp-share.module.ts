import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { WpShareAddComponent } from './wp-share-add/wp-share-add.component';
import { WpShareDetailComponent } from './wp-share-detail/wp-share-detail.component'; 
import { WpShareWidgetComponent } from './wp-share-widget/wp-share-widget.component';
import { WpShareListComponent } from './wp-share-list/wp-share-list.component';
import { WpShareHeaderComponent } from './wp-share-header/wp-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    WpShareAddComponent,
    WpShareDetailComponent,
    WpShareListComponent,
    WpShareHeaderComponent,
    WpShareWidgetComponent
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
export class WpShareModule { }
