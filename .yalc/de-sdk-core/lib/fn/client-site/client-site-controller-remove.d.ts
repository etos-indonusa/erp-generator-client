import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientSiteDto } from '../../models/pelanggan-client-site-dto';
export interface ClientSiteControllerRemove$Params {
    id: string;
}
export declare function clientSiteControllerRemove(http: HttpClient, rootUrl: string, params: ClientSiteControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientSiteDto;
}>>;
export declare namespace clientSiteControllerRemove {
    var PATH: string;
}
