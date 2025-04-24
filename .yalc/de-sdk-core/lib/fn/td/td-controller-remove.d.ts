import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDto } from '../../models/amims-td-dto';
export interface TdControllerRemove$Params {
    id: string;
}
export declare function tdControllerRemove(http: HttpClient, rootUrl: string, params: TdControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDto;
}>>;
export declare namespace tdControllerRemove {
    var PATH: string;
}
