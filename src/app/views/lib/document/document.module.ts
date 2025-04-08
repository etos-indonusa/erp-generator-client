import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetV1Component } from './widget-v1/widget-v1.component';
import { WidgetV2Component } from './widget-v2/widget-v2.component';
import { UploadInlineComponent } from './upload-inline/upload-inline.component';
import { UploadDrawerComponent } from './upload-drawer/upload-drawer.component';
import { ListV1Component } from './list-v1/list-v1.component';
import { ListV3Component } from './list-v3/list-v3.component';
import { ListV2Component } from './list-v2/list-v2.component';
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module'; 
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from 'src/sdk/lib/api.module';
 
@NgModule({
    exports: [
        WidgetV1Component,
        WidgetV2Component,
        UploadInlineComponent,
        UploadDrawerComponent,
        ListV1Component,
        ListV3Component,
        ListV2Component
    ],
    declarations: [
        WidgetV1Component,
        WidgetV2Component,
        UploadInlineComponent,
        UploadDrawerComponent,
        ListV1Component,
        ListV3Component,
        ListV2Component
    ],
    imports: [
        ApiModule.forRoot({ rootUrl: environment.lib }),
        CommonModule, 
        NzUploadModule,
        AntSimpleModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DocumentModule { }
