import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnItemDto } from '../../models/amims-pur-return-item-dto';
export interface PurReturnItemControllerCreate$Params {
    body: AmimsPurReturnItemDto;
}
export declare function purReturnItemControllerCreate(http: HttpClient, rootUrl: string, params: PurReturnItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurReturnItemDto;
}>>;
export declare namespace purReturnItemControllerCreate {
    var PATH: string;
}
