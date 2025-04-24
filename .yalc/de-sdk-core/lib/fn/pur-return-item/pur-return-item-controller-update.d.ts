import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnItemDto } from '../../models/amims-pur-return-item-dto';
export interface PurReturnItemControllerUpdate$Params {
    id: string;
    body: AmimsPurReturnItemDto;
}
export declare function purReturnItemControllerUpdate(http: HttpClient, rootUrl: string, params: PurReturnItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurReturnItemDto;
}>>;
export declare namespace purReturnItemControllerUpdate {
    var PATH: string;
}
