import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnDto } from '../../models/amims-pur-return-dto';
export interface PurReturnControllerCreate$Params {
    body: AmimsPurReturnDto;
}
export declare function purReturnControllerCreate(http: HttpClient, rootUrl: string, params: PurReturnControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurReturnDto;
}>>;
export declare namespace purReturnControllerCreate {
    var PATH: string;
}
