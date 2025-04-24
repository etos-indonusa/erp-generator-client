import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdRefDto } from '../../models/amims-td-ref-dto';
export interface TdRefControllerUpdate$Params {
    id: string;
    body: AmimsTdRefDto;
}
export declare function tdRefControllerUpdate(http: HttpClient, rootUrl: string, params: TdRefControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdRefDto;
}>>;
export declare namespace tdRefControllerUpdate {
    var PATH: string;
}
