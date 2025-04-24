import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnDto } from '../../models/amims-pur-grn-dto';
export interface PurGrnControllerRemove$Params {
    id: string;
}
export declare function purGrnControllerRemove(http: HttpClient, rootUrl: string, params: PurGrnControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurGrnDto;
}>>;
export declare namespace purGrnControllerRemove {
    var PATH: string;
}
