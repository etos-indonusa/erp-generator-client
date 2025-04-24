import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientDto } from '../../models/pelanggan-client-dto';
export interface ClientControllerUpdate$Params {
    id: string;
    body: PelangganClientDto;
}
export declare function clientControllerUpdate(http: HttpClient, rootUrl: string, params: ClientControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientDto;
}>>;
export declare namespace clientControllerUpdate {
    var PATH: string;
}
