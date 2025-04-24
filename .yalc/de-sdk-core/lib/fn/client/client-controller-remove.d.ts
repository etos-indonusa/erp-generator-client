import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientDto } from '../../models/pelanggan-client-dto';
export interface ClientControllerRemove$Params {
    id: string;
}
export declare function clientControllerRemove(http: HttpClient, rootUrl: string, params: ClientControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientDto;
}>>;
export declare namespace clientControllerRemove {
    var PATH: string;
}
