import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnDto } from '../../models/amims-pur-return-dto';
export interface PurReturnControllerFindOne$Params {
    id: string;
}
export declare function purReturnControllerFindOne(http: HttpClient, rootUrl: string, params: PurReturnControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurReturnDto;
}>>;
export declare namespace purReturnControllerFindOne {
    var PATH: string;
}
