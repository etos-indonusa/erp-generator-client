import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganKantorDto } from '../../models/pelanggan-kantor-dto';
export interface KantorControllerCreate$Params {
    body: PelangganKantorDto;
}
export declare function kantorControllerCreate(http: HttpClient, rootUrl: string, params: KantorControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganKantorDto;
}>>;
export declare namespace kantorControllerCreate {
    var PATH: string;
}
