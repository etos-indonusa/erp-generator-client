import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientSiteDto } from '../../models/pelanggan-client-site-dto';
export interface ClientSiteControllerFindOne$Params {
    id: string;
}
export declare function clientSiteControllerFindOne(http: HttpClient, rootUrl: string, params: ClientSiteControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientSiteDto;
}>>;
export declare namespace clientSiteControllerFindOne {
    var PATH: string;
}
