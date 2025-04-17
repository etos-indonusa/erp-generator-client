import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { CustomFieldGroupShareAddComponent } from './custom-field-group-share-add/custom-field-group-share-add.component';
import { CustomFieldGroupShareDetailComponent } from './custom-field-group-share-detail/custom-field-group-share-detail.component'; 
import { CustomFieldGroupShareWidgetComponent } from './custom-field-group-share-widget/custom-field-group-share-widget.component'; 
import { CustomFieldGroupShareHeaderComponent } from './custom-field-group-share-header/custom-field-group-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { TranslateService } from '@ngx-translate/core';
import { CustomFieldShareModule } from '../../custom-field/custom-field-share/custom-field-share.module';
 
const COM = [
    CustomFieldGroupShareAddComponent,
    CustomFieldGroupShareDetailComponent, 
    CustomFieldGroupShareHeaderComponent,
    CustomFieldGroupShareWidgetComponent
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
        CustomFieldShareModule
        // ApprovalModule,
    ]
}) 
export class CustomFieldGroupShareModule { 
    constructor( 
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

}
