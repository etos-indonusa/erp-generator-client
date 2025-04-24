import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnItemDto } from '../../models/amims-pur-grn-item-dto';
export interface PurGrnItemControllerFindOne$Params {
    id: string;
}
export declare function purGrnItemControllerFindOne(http: HttpClient, rootUrl: string, params: PurGrnItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurGrnItemDto;
}>>;
export declare namespace purGrnItemControllerFindOne {
    var PATH: string;
}
