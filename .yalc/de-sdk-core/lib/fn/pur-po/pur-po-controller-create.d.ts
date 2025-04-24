import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoDto } from '../../models/amims-pur-po-dto';
export interface PurPoControllerCreate$Params {
    body: AmimsPurPoDto;
}
export declare function purPoControllerCreate(http: HttpClient, rootUrl: string, params: PurPoControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPoDto;
}>>;
export declare namespace purPoControllerCreate {
    var PATH: string;
}
