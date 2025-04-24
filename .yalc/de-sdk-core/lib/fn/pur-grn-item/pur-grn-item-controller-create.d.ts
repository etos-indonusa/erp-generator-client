import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnItemDto } from '../../models/amims-pur-grn-item-dto';
export interface PurGrnItemControllerCreate$Params {
    body: AmimsPurGrnItemDto;
}
export declare function purGrnItemControllerCreate(http: HttpClient, rootUrl: string, params: PurGrnItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurGrnItemDto;
}>>;
export declare namespace purGrnItemControllerCreate {
    var PATH: string;
}
