import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { ApiModule } from 'src/sdk/core/api.module';

import { TranslateService } from '@ngx-translate/core';




@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        ModulesRoutingModule,
        ApiModule.forRoot({ rootUrl: environment.core })
    ]
})
export class ModulesModule { 
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('id');
        translate.use('id'); // ini yang mengaktifkan langsung
    }
}
