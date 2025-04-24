import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdRefDto } from '../../models/amims-td-ref-dto';
export interface TdRefControllerRemove$Params {
    id: string;
}
export declare function tdRefControllerRemove(http: HttpClient, rootUrl: string, params: TdRefControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdRefDto;
}>>;
export declare namespace tdRefControllerRemove {
    var PATH: string;
}
