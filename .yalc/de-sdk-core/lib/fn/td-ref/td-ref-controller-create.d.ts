import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdRefDto } from '../../models/amims-td-ref-dto';
export interface TdRefControllerCreate$Params {
    body: AmimsTdRefDto;
}
export declare function tdRefControllerCreate(http: HttpClient, rootUrl: string, params: TdRefControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdRefDto;
}>>;
export declare namespace tdRefControllerCreate {
    var PATH: string;
}
