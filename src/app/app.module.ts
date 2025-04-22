import { APP_INITIALIZER, importProvidersFrom, NgModule, provideZoneChangeDetection } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from 'src/libs/auth/store/auth.reducer';
import { AuthEffects } from 'src/libs/auth/store/auth.effects';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NZ_I18N, en_US, provideNzI18n, id_ID } from 'ng-zorro-antd/i18n';
import { HighlightModule, HIGHLIGHT_OPTIONS, provideHighlightOptions } from 'ngx-highlightjs';
import { AuthInterceptor } from 'src/libs/auth/interceptors/auth.interceptor';
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app.routes';
import { HttpLoaderFactory, TampilanModule } from './shared/tampilan.module'; 
import { environment } from 'src/environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from 'de-sdk-core/api.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common'; 
import id from '@angular/common/locales/id'; 
import { menuModeInitializerFactory } from './app.initializer'; 
const highlightOptions = {
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        scss: () => import('highlight.js/lib/languages/scss'),
        xml: () => import('highlight.js/lib/languages/xml')
    },
};
registerLocaleData(id);
export function appTranslateInitializer(translate: TranslateService) {
    return () => { 
        translate.setDefaultLang('id');
        return translate.use('id').toPromise();
    };
}
 
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        TampilanModule, 
        ApiModule.forRoot({ rootUrl: environment.core }),
        StoreModule.forRoot({ auth: authReducer }),
        EffectsModule.forRoot([AuthEffects]),
 
        SweetAlert2Module.forRoot(),
        HighlightModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: NZ_I18N, useValue: id_ID },
        {
            provide: APP_INITIALIZER,
            useFactory: appTranslateInitializer,
            deps: [TranslateService],
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: menuModeInitializerFactory,
            multi: true,
            deps: [Store] // pastikan Store terdaftar
        },
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
