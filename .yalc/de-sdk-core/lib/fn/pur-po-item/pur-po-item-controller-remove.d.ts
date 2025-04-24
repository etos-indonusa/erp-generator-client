import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoItemDto } from '../../models/amims-pur-po-item-dto';
export interface PurPoItemControllerRemove$Params {
    id: string;
}
export declare function purPoItemControllerRemove(http: HttpClient, rootUrl: string, params: PurPoItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPoItemDto;
}>>;
export declare namespace purPoItemControllerRemove {
    var PATH: string;
}
