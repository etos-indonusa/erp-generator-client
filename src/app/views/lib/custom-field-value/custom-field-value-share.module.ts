import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { CustomFieldValueShareAddComponent } from './custom-field-value-share-add/custom-field-value-share-add.component';
import { CustomFieldValueShareDetailComponent } from './custom-field-value-share-detail/custom-field-value-share-detail.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { TranslateService } from '@ngx-translate/core';

const COM = [
    CustomFieldValueShareAddComponent,
    CustomFieldValueShareDetailComponent,
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
    ]
})
export class CustomFieldValueShareModule {
    constructor(
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }
}

