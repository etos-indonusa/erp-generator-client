import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { AircraftShareAddComponent } from './aircraft-share-add/aircraft-share-add.component';
import { AircraftShareDetailComponent } from './aircraft-share-detail/aircraft-share-detail.component'; 
import { AircraftShareWidgetComponent } from './aircraft-share-widget/aircraft-share-widget.component';
import { AircraftShareListComponent } from './aircraft-share-list/aircraft-share-list.component';
import { AircraftShareHeaderComponent } from './aircraft-share-header/aircraft-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    AircraftShareAddComponent,
    AircraftShareDetailComponent,
    AircraftShareListComponent,
    AircraftShareHeaderComponent,
    AircraftShareWidgetComponent
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
export class AircraftShareModule { }
