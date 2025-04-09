import { importProvidersFrom, NgModule, provideZoneChangeDetection } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from 'src/libs/auth/store/auth.reducer';
import { AuthEffects } from 'src/libs/auth/store/auth.effects';
import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NZ_I18N, en_US, provideNzI18n, id_ID } from 'ng-zorro-antd/i18n';
import { HighlightModule, HIGHLIGHT_OPTIONS, provideHighlightOptions } from 'ngx-highlightjs';
import { AuthInterceptor } from 'src/libs/auth/interceptors/auth.interceptor';
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app.routes';
import { TampilanModule } from './shared/tampilan.module';
import { ApiModule } from 'src/sdk/core/api.module';
import { environment } from 'src/environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiModule as ApiModuleLib } from 'src/sdk/lib/api.module';

const highlightOptions = {
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        scss: () => import('highlight.js/lib/languages/scss'),
        xml: () => import('highlight.js/lib/languages/xml')
    },
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        TampilanModule,
        ApiModuleLib.forRoot({ rootUrl: environment.lib }),
        ApiModule.forRoot({ rootUrl: environment.core }),
        StoreModule.forRoot({ auth: authReducer }),
        EffectsModule.forRoot([AuthEffects]),
 
        SweetAlert2Module.forRoot(),
        HighlightModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: NZ_I18N, useValue: id_ID },
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    scss: () => import('highlight.js/lib/languages/scss'),
                    xml: () => import('highlight.js/lib/languages/xml')
                }
            }
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
