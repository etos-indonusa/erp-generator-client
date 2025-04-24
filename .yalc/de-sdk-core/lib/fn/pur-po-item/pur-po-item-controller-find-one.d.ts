import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoItemDto } from '../../models/amims-pur-po-item-dto';
export interface PurPoItemControllerFindOne$Params {
    id: string;
}
export declare function purPoItemControllerFindOne(http: HttpClient, rootUrl: string, params: PurPoItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPoItemDto;
}>>;
export declare namespace purPoItemControllerFindOne {
    var PATH: string;
}
