import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientDto } from '../../models/pelanggan-client-dto';
export interface ClientControllerFindOne$Params {
    id: string;
}
export declare function clientControllerFindOne(http: HttpClient, rootUrl: string, params: ClientControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientDto;
}>>;
export declare namespace clientControllerFindOne {
    var PATH: string;
}
