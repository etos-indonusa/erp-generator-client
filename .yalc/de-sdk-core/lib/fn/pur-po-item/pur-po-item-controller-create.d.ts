import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoItemDto } from '../../models/amims-pur-po-item-dto';
export interface PurPoItemControllerCreate$Params {
    body: AmimsPurPoItemDto;
}
export declare function purPoItemControllerCreate(http: HttpClient, rootUrl: string, params: PurPoItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPoItemDto;
}>>;
export declare namespace purPoItemControllerCreate {
    var PATH: string;
}
