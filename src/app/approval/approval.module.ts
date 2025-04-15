import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalStepsComponent } from './approval-steps/approval-steps.component';
import { ApprovalLogsComponent } from './approval-logs/approval-logs.component';
import { ApprovalFormWidgetComponent } from './approval-form-widget/approval-form-widget.component';
import { TampilanModule } from '../shared/tampilan.module';
import { AntSimpleModule } from '../shared/ant-simple.module';
import { ApprovalConfirmComponent } from './approval-confirm/approval-confirm.component';



@NgModule({
    exports: [
        ApprovalStepsComponent,
        ApprovalLogsComponent,
        ApprovalConfirmComponent,
        ApprovalFormWidgetComponent
    ],
    declarations: [
        ApprovalStepsComponent,
        ApprovalLogsComponent,
        ApprovalFormWidgetComponent,
        ApprovalConfirmComponent
    ],
    imports: [
        CommonModule,
        TampilanModule,
        AntSimpleModule
    ]
})
export class ApprovalModule { }
