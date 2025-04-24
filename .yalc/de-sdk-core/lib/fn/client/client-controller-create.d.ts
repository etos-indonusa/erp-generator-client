import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientDto } from '../../models/pelanggan-client-dto';
export interface ClientControllerCreate$Params {
    body: PelangganClientDto;
}
export declare function clientControllerCreate(http: HttpClient, rootUrl: string, params: ClientControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientDto;
}>>;
export declare namespace clientControllerCreate {
    var PATH: string;
}
