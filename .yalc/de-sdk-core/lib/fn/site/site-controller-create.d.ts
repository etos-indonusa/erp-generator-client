import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsSiteDto } from '../../models/amims-site-dto';
export interface SiteControllerCreate$Params {
    body: AmimsSiteDto;
}
export declare function siteControllerCreate(http: HttpClient, rootUrl: string, params: SiteControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsSiteDto;
}>>;
export declare namespace siteControllerCreate {
    var PATH: string;
}
