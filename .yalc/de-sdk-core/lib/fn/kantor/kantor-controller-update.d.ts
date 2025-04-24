import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganKantorDto } from '../../models/pelanggan-kantor-dto';
export interface KantorControllerUpdate$Params {
    id: string;
    body: PelangganKantorDto;
}
export declare function kantorControllerUpdate(http: HttpClient, rootUrl: string, params: KantorControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganKantorDto;
}>>;
export declare namespace kantorControllerUpdate {
    var PATH: string;
}
