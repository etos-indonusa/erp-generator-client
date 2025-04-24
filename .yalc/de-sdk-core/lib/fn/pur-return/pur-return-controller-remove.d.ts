import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnDto } from '../../models/amims-pur-return-dto';
export interface PurReturnControllerRemove$Params {
    id: string;
}
export declare function purReturnControllerRemove(http: HttpClient, rootUrl: string, params: PurReturnControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurReturnDto;
}>>;
export declare namespace purReturnControllerRemove {
    var PATH: string;
}
