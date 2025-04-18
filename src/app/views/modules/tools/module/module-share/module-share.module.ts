import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleShareAddComponent } from './module-share-add/module-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { ModuleShareDetailComponent } from './module-share-detail/module-share-detail.component';
import { CustomFieldGroupShareModule } from '../../custom-field-group/custom-field-group-share/custom-field-group-share.module';
import { WorkflowShareModule } from '../../workflow/workflow-share/workflow-share.module';
 
 
@NgModule({
    declarations: [
        ModuleShareAddComponent, 
        ModuleShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule,
        CustomFieldGroupShareModule,
        
    ]
}) 
export class ModuleShareModule { }
