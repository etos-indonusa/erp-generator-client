import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { RotaryFactorShareAddComponent } from './rotary-factor-share-add/rotary-factor-share-add.component';
import { RotaryFactorShareDetailComponent } from './rotary-factor-share-detail/rotary-factor-share-detail.component'; 
import { RotaryFactorShareWidgetComponent } from './rotary-factor-share-widget/rotary-factor-share-widget.component';
import { RotaryFactorShareListComponent } from './rotary-factor-share-list/rotary-factor-share-list.component';
import { RotaryFactorShareHeaderComponent } from './rotary-factor-share-header/rotary-factor-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    RotaryFactorShareAddComponent,
    RotaryFactorShareDetailComponent,
    RotaryFactorShareListComponent,
    RotaryFactorShareHeaderComponent,
    RotaryFactorShareWidgetComponent
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
export class RotaryFactorShareModule { }
