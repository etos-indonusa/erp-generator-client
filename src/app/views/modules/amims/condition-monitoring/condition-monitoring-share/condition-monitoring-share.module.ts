import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { ConditionMonitoringShareAddComponent } from './condition-monitoring-share-add/condition-monitoring-share-add.component';
import { ConditionMonitoringShareDetailComponent } from './condition-monitoring-share-detail/condition-monitoring-share-detail.component'; 
import { ConditionMonitoringShareWidgetComponent } from './condition-monitoring-share-widget/condition-monitoring-share-widget.component';
import { ConditionMonitoringShareListComponent } from './condition-monitoring-share-list/condition-monitoring-share-list.component';
import { ConditionMonitoringShareHeaderComponent } from './condition-monitoring-share-header/condition-monitoring-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    ConditionMonitoringShareAddComponent,
    ConditionMonitoringShareDetailComponent,
    ConditionMonitoringShareListComponent,
    ConditionMonitoringShareHeaderComponent,
    ConditionMonitoringShareWidgetComponent
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
export class ConditionMonitoringShareModule { }
