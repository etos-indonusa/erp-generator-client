import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoDto } from '../../models/amims-pur-po-dto';
export interface PurPoControllerFindOne$Params {
    id: string;
}
export declare function purPoControllerFindOne(http: HttpClient, rootUrl: string, params: PurPoControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPoDto;
}>>;
export declare namespace purPoControllerFindOne {
    var PATH: string;
}
