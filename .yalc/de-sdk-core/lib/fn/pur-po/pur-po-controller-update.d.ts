import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoDto } from '../../models/amims-pur-po-dto';
export interface PurPoControllerUpdate$Params {
    id: string;
    body: AmimsPurPoDto;
}
export declare function purPoControllerUpdate(http: HttpClient, rootUrl: string, params: PurPoControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPoDto;
}>>;
export declare namespace purPoControllerUpdate {
    var PATH: string;
}
