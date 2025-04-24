import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganKantorDto } from '../../models/pelanggan-kantor-dto';
export interface KantorControllerFindOne$Params {
    id: string;
}
export declare function kantorControllerFindOne(http: HttpClient, rootUrl: string, params: KantorControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganKantorDto;
}>>;
export declare namespace kantorControllerFindOne {
    var PATH: string;
}
