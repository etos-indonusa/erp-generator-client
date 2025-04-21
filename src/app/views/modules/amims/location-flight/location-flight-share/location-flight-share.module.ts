import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationFlightShareAddComponent } from './location-flight-share-add/location-flight-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { LocationFlightShareDetailComponent } from './location-flight-share-detail/location-flight-share-detail.component';
 
 
@NgModule({
    declarations: [
        LocationFlightShareAddComponent, 
        LocationFlightShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class LocationFlightShareModule { }
