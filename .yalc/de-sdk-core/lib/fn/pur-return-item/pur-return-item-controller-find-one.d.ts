import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnItemDto } from '../../models/amims-pur-return-item-dto';
export interface PurReturnItemControllerFindOne$Params {
    id: string;
}
export declare function purReturnItemControllerFindOne(http: HttpClient, rootUrl: string, params: PurReturnItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurReturnItemDto;
}>>;
export declare namespace purReturnItemControllerFindOne {
    var PATH: string;
}
