import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnDto } from '../../models/amims-pur-grn-dto';
export interface PurGrnControllerUpdate$Params {
    id: string;
    body: AmimsPurGrnDto;
}
export declare function purGrnControllerUpdate(http: HttpClient, rootUrl: string, params: PurGrnControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurGrnDto;
}>>;
export declare namespace purGrnControllerUpdate {
    var PATH: string;
}
