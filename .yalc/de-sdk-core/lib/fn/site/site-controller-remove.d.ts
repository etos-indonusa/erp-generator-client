import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsSiteDto } from '../../models/amims-site-dto';
export interface SiteControllerRemove$Params {
    id: string;
}
export declare function siteControllerRemove(http: HttpClient, rootUrl: string, params: SiteControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsSiteDto;
}>>;
export declare namespace siteControllerRemove {
    var PATH: string;
}
