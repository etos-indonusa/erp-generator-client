import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganKantorDto } from '../../models/pelanggan-kantor-dto';
export interface KantorControllerRemove$Params {
    id: string;
}
export declare function kantorControllerRemove(http: HttpClient, rootUrl: string, params: KantorControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganKantorDto;
}>>;
export declare namespace kantorControllerRemove {
    var PATH: string;
}
