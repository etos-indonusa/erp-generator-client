import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientSiteDto } from '../../models/pelanggan-client-site-dto';
export interface ClientSiteControllerCreate$Params {
    body: PelangganClientSiteDto;
}
export declare function clientSiteControllerCreate(http: HttpClient, rootUrl: string, params: ClientSiteControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientSiteDto;
}>>;
export declare namespace clientSiteControllerCreate {
    var PATH: string;
}
