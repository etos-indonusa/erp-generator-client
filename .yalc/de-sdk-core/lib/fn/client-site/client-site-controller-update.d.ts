import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientSiteDto } from '../../models/pelanggan-client-site-dto';
export interface ClientSiteControllerUpdate$Params {
    id: string;
    body: PelangganClientSiteDto;
}
export declare function clientSiteControllerUpdate(http: HttpClient, rootUrl: string, params: ClientSiteControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientSiteDto;
}>>;
export declare namespace clientSiteControllerUpdate {
    var PATH: string;
}
