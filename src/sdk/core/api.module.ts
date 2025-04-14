/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AppService } from './services/app.service';
import { AuthPublicService } from './services/auth-public.service';
import { UsersService } from './services/users.service';
import { UserTokensService } from './services/user-tokens.service';
import { AuthProtectService } from './services/auth-protect.service';
import { ContractService } from './services/contract.service';
import { ContractReportService } from './services/contract-report.service';
import { ContractWidgetService } from './services/contract-widget.service';
import { ContractJenisService } from './services/contract-jenis.service';
import { KantorService } from './services/kantor.service';
import { ContractSiteService } from './services/contract-site.service';
import { ContractSiteReportService } from './services/contract-site-report.service';
import { ContractSiteWidgetService } from './services/contract-site-widget.service';
import { ClientService } from './services/client.service';
import { ClientReportService } from './services/client-report.service';
import { ClientSiteService } from './services/client-site.service';
import { WorkflowService } from './services/workflow.service';
import { WorkflowApplyService } from './services/workflow-apply.service';
import { WorkflowReportService } from './services/workflow-report.service';
import { WorkflowWidgetService } from './services/workflow-widget.service';
import { WorkflowLogService } from './services/workflow-log.service';
import { WorkflowLogReportService } from './services/workflow-log-report.service';
import { WorkflowLogWidgetService } from './services/workflow-log-widget.service';
import { WorkflowStepService } from './services/workflow-step.service';
import { WorkflowStepReportService } from './services/workflow-step-report.service';
import { WorkflowStepWidgetService } from './services/workflow-step-widget.service';
import { ClientContactService } from './services/client-contact.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AppService,
    AuthPublicService,
    UsersService,
    UserTokensService,
    AuthProtectService,
    ContractService,
    ContractReportService,
    ContractWidgetService,
    ContractJenisService,
    KantorService,
    ContractSiteService,
    ContractSiteReportService,
    ContractSiteWidgetService,
    ClientService,
    ClientReportService,
    ClientSiteService,
    WorkflowService,
    WorkflowApplyService,
    WorkflowReportService,
    WorkflowWidgetService,
    WorkflowLogService,
    WorkflowLogReportService,
    WorkflowLogWidgetService,
    WorkflowStepService,
    WorkflowStepReportService,
    WorkflowStepWidgetService,
    ClientContactService,
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
