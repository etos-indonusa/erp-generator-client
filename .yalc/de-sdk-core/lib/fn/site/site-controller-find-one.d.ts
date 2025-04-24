import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsSiteDto } from '../../models/amims-site-dto';
export interface SiteControllerFindOne$Params {
    id: string;
}
export declare function siteControllerFindOne(http: HttpClient, rootUrl: string, params: SiteControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsSiteDto;
}>>;
export declare namespace siteControllerFindOne {
    var PATH: string;
}
