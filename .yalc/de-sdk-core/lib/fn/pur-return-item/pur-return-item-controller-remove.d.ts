import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnItemDto } from '../../models/amims-pur-return-item-dto';
export interface PurReturnItemControllerRemove$Params {
    id: string;
}
export declare function purReturnItemControllerRemove(http: HttpClient, rootUrl: string, params: PurReturnItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurReturnItemDto;
}>>;
export declare namespace purReturnItemControllerRemove {
    var PATH: string;
}
