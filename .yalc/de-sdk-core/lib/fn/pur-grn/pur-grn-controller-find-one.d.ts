import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnDto } from '../../models/amims-pur-grn-dto';
export interface PurGrnControllerFindOne$Params {
    id: string;
}
export declare function purGrnControllerFindOne(http: HttpClient, rootUrl: string, params: PurGrnControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurGrnDto;
}>>;
export declare namespace purGrnControllerFindOne {
    var PATH: string;
}
