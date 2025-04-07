import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { StatusPipe } from './pipes/status.pipe';
import { TextStringPipe } from './pipes/text-string.pipe';
import { TextTrPipe } from './pipes/text-tr.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AclService } from '../services/acl.service';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { ApiModule } from 'src/sdk/core/api.module';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { PesanService } from './services/pesan.service';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const MODULES = [
    NgbCollapseModule,
    ReactiveFormsModule,
    FormsModule
]

@NgModule({
    declarations: [TextTrPipe, StatusPipe, TextStringPipe, TimeAgoPipe, BreadcrumbsComponent],
    imports: [

        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        CommonModule,
        ...MODULES
    ],
    exports: [
        TextTrPipe,
        StatusPipe,
        TextStringPipe,
        TimeAgoPipe,
        BreadcrumbsComponent,
        TranslateModule,
        ...MODULES
    ],
    providers: [
        AclService,
        TranslateService,
        PesanService
    ]
})
export class TampilanModule { 
    
}
