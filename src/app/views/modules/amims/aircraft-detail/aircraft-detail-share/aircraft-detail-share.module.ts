import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { AircraftDetailShareAddComponent } from './aircraft-detail-share-add/aircraft-detail-share-add.component';
import { AircraftDetailShareDetailComponent } from './aircraft-detail-share-detail/aircraft-detail-share-detail.component'; 
import { AircraftDetailShareWidgetComponent } from './aircraft-detail-share-widget/aircraft-detail-share-widget.component';
import { AircraftDetailShareListComponent } from './aircraft-detail-share-list/aircraft-detail-share-list.component';
import { AircraftDetailShareHeaderComponent } from './aircraft-detail-share-header/aircraft-detail-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    AircraftDetailShareAddComponent,
    AircraftDetailShareDetailComponent,
    AircraftDetailShareListComponent,
    AircraftDetailShareHeaderComponent,
    AircraftDetailShareWidgetComponent
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
export class AircraftDetailShareModule { }
