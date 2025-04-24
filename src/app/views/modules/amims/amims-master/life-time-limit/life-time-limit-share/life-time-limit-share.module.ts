import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { LifeTimeLimitShareAddComponent } from './life-time-limit-share-add/life-time-limit-share-add.component';
import { LifeTimeLimitShareDetailComponent } from './life-time-limit-share-detail/life-time-limit-share-detail.component'; 
import { LifeTimeLimitShareWidgetComponent } from './life-time-limit-share-widget/life-time-limit-share-widget.component';
import { LifeTimeLimitShareListComponent } from './life-time-limit-share-list/life-time-limit-share-list.component';
import { LifeTimeLimitShareHeaderComponent } from './life-time-limit-share-header/life-time-limit-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    LifeTimeLimitShareAddComponent,
    LifeTimeLimitShareDetailComponent,
    LifeTimeLimitShareListComponent,
    LifeTimeLimitShareHeaderComponent,
    LifeTimeLimitShareWidgetComponent
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
export class LifeTimeLimitShareModule { }
