import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnItemDto } from '../../models/amims-pur-grn-item-dto';
export interface PurGrnItemControllerRemove$Params {
    id: string;
}
export declare function purGrnItemControllerRemove(http: HttpClient, rootUrl: string, params: PurGrnItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurGrnItemDto;
}>>;
export declare namespace purGrnItemControllerRemove {
    var PATH: string;
}
