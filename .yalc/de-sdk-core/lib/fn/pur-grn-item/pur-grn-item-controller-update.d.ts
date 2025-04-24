import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnItemDto } from '../../models/amims-pur-grn-item-dto';
export interface PurGrnItemControllerUpdate$Params {
    id: string;
    body: AmimsPurGrnItemDto;
}
export declare function purGrnItemControllerUpdate(http: HttpClient, rootUrl: string, params: PurGrnItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurGrnItemDto;
}>>;
export declare namespace purGrnItemControllerUpdate {
    var PATH: string;
}
