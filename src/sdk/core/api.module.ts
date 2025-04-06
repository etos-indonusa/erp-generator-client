/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { UserTokensService } from './services/user-tokens.service';
import { ClientService } from './services/client.service';
import { ClientSiteService } from './services/client-site.service';
import { CompanyConfigService } from './services/company-config.service';
import { ContactClientUseService } from './services/contact-client-use.service';
import { ContractService } from './services/contract.service';
import { ContractReportService } from './services/contract-report.service';
import { ContractSiteService } from './services/contract-site.service';
import { ContractSiteWidgetService } from './services/contract-site-widget.service';
import { ContractSiteReportService } from './services/contract-site-report.service';
import { ContractSiteServiceService } from './services/contract-site-service.service';
import { CustomFieldService } from './services/custom-field.service';
import { CustomFieldValueService } from './services/custom-field-value.service';
import { FakturService } from './services/faktur.service';
import { InvoiceService } from './services/invoice.service';
import { KantorService } from './services/kantor.service';
import { ServiceService } from './services/service.service';
import { WorkScheduleService } from './services/work-schedule.service';
import { WorkScheduleTeknisiService } from './services/work-schedule-teknisi.service';
import { ModuleService } from './services/module.service';
import { UserGroupAccessService } from './services/user-group-access.service';
import { UserGroupService } from './services/user-group.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AppService,
    AuthService,
    UsersService,
    UserTokensService,
    ClientService,
    ClientSiteService,
    CompanyConfigService,
    ContactClientUseService,
    ContractService,
    ContractReportService,
    ContractSiteService,
    ContractSiteWidgetService,
    ContractSiteReportService,
    ContractSiteServiceService,
    CustomFieldService,
    CustomFieldValueService,
    FakturService,
    InvoiceService,
    KantorService,
    ServiceService,
    WorkScheduleService,
    WorkScheduleTeknisiService,
    ModuleService,
    UserGroupAccessService,
    UserGroupService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
