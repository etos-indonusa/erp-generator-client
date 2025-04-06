/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { contactClientUseControllerCreate } from '../fn/contact-client-use/contact-client-use-controller-create';
import { ContactClientUseControllerCreate$Params } from '../fn/contact-client-use/contact-client-use-controller-create';
import { contactClientUseControllerFindAll } from '../fn/contact-client-use/contact-client-use-controller-find-all';
import { ContactClientUseControllerFindAll$Params } from '../fn/contact-client-use/contact-client-use-controller-find-all';
import { contactClientUseControllerFindOne } from '../fn/contact-client-use/contact-client-use-controller-find-one';
import { ContactClientUseControllerFindOne$Params } from '../fn/contact-client-use/contact-client-use-controller-find-one';
import { contactClientUseControllerRemove } from '../fn/contact-client-use/contact-client-use-controller-remove';
import { ContactClientUseControllerRemove$Params } from '../fn/contact-client-use/contact-client-use-controller-remove';
import { contactClientUseControllerUpdate } from '../fn/contact-client-use/contact-client-use-controller-update';
import { ContactClientUseControllerUpdate$Params } from '../fn/contact-client-use/contact-client-use-controller-update';
import { ContactClientUseDto } from '../models/contact-client-use-dto';

@Injectable({ providedIn: 'root' })
export class ContactClientUseService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `contactClientUseControllerFindAll()` */
  static readonly ContactClientUseControllerFindAllPath = '/nonauth/contact_client_use/contact_client_use';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contactClientUseControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  contactClientUseControllerFindAll$Response(params?: ContactClientUseControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ContactClientUseDto>;
'total'?: number;
}>> {
    return contactClientUseControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contactClientUseControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contactClientUseControllerFindAll(params?: ContactClientUseControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ContactClientUseDto>;
'total'?: number;
}> {
    return this.contactClientUseControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ContactClientUseDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<ContactClientUseDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `contactClientUseControllerCreate()` */
  static readonly ContactClientUseControllerCreatePath = '/nonauth/contact_client_use/contact_client_use';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contactClientUseControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contactClientUseControllerCreate$Response(params: ContactClientUseControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}>> {
    return contactClientUseControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contactClientUseControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contactClientUseControllerCreate(params: ContactClientUseControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}> {
    return this.contactClientUseControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
} => r.body)
    );
  }

  /** Path part for operation `contactClientUseControllerFindOne()` */
  static readonly ContactClientUseControllerFindOnePath = '/nonauth/contact_client_use/contact_client_use/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contactClientUseControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  contactClientUseControllerFindOne$Response(params: ContactClientUseControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}>> {
    return contactClientUseControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contactClientUseControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contactClientUseControllerFindOne(params: ContactClientUseControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}> {
    return this.contactClientUseControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
} => r.body)
    );
  }

  /** Path part for operation `contactClientUseControllerUpdate()` */
  static readonly ContactClientUseControllerUpdatePath = '/nonauth/contact_client_use/contact_client_use/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contactClientUseControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contactClientUseControllerUpdate$Response(params: ContactClientUseControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}>> {
    return contactClientUseControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contactClientUseControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contactClientUseControllerUpdate(params: ContactClientUseControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}> {
    return this.contactClientUseControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
} => r.body)
    );
  }

  /** Path part for operation `contactClientUseControllerRemove()` */
  static readonly ContactClientUseControllerRemovePath = '/nonauth/contact_client_use/contact_client_use/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contactClientUseControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  contactClientUseControllerRemove$Response(params: ContactClientUseControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}>> {
    return contactClientUseControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contactClientUseControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contactClientUseControllerRemove(params: ContactClientUseControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}> {
    return this.contactClientUseControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: ContactClientUseDto;
} => r.body)
    );
  }

}
