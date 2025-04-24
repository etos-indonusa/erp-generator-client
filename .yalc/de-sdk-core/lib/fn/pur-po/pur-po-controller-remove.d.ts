import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoDto } from '../../models/amims-pur-po-dto';
export interface PurPoControllerRemove$Params {
    id: string;
}
export declare function purPoControllerRemove(http: HttpClient, rootUrl: string, params: PurPoControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPoDto;
}>>;
export declare namespace purPoControllerRemove {
    var PATH: string;
}
