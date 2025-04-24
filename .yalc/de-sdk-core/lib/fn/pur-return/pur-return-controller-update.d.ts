import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnDto } from '../../models/amims-pur-return-dto';
export interface PurReturnControllerUpdate$Params {
    id: string;
    body: AmimsPurReturnDto;
}
export declare function purReturnControllerUpdate(http: HttpClient, rootUrl: string, params: PurReturnControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurReturnDto;
}>>;
export declare namespace purReturnControllerUpdate {
    var PATH: string;
}
