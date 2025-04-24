import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsSiteDto } from '../../models/amims-site-dto';
export interface SiteControllerUpdate$Params {
    id: string;
    body: AmimsSiteDto;
}
export declare function siteControllerUpdate(http: HttpClient, rootUrl: string, params: SiteControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsSiteDto;
}>>;
export declare namespace siteControllerUpdate {
    var PATH: string;
}
