import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoItemDto } from '../../models/amims-pur-po-item-dto';
export interface PurPoItemControllerUpdate$Params {
    id: string;
    body: AmimsPurPoItemDto;
}
export declare function purPoItemControllerUpdate(http: HttpClient, rootUrl: string, params: PurPoItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPoItemDto;
}>>;
export declare namespace purPoItemControllerUpdate {
    var PATH: string;
}
