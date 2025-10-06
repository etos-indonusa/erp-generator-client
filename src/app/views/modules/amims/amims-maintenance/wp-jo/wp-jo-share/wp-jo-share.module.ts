import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { WpJoShareAddComponent } from './wp-jo-share-add/wp-jo-share-add.component';
import { WpJoShareDetailComponent } from './wp-jo-share-detail/wp-jo-share-detail.component'; 
import { WpJoShareWidgetComponent } from './wp-jo-share-widget/wp-jo-share-widget.component';
import { WpJoShareListComponent } from './wp-jo-share-list/wp-jo-share-list.component';
import { WpJoShareHeaderComponent } from './wp-jo-share-header/wp-jo-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';
import { LastMaintenanceShareModule } from "../../last-maintenance/last-maintenance-share/last-maintenance-share.module";

const COM = [
    WpJoShareAddComponent,
    WpJoShareDetailComponent,
    WpJoShareListComponent,
    WpJoShareHeaderComponent,
    WpJoShareWidgetComponent
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
    LastMaintenanceShareModule
]
}) 
export class WpJoShareModule { }
