import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnDto } from '../../models/amims-pur-grn-dto';
export interface PurGrnControllerCreate$Params {
    body: AmimsPurGrnDto;
}
export declare function purGrnControllerCreate(http: HttpClient, rootUrl: string, params: PurGrnControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurGrnDto;
}>>;
export declare namespace purGrnControllerCreate {
    var PATH: string;
}
