import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdRefDto } from '../../models/amims-td-ref-dto';
export interface TdRefControllerFindOne$Params {
    id: string;
}
export declare function tdRefControllerFindOne(http: HttpClient, rootUrl: string, params: TdRefControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdRefDto;
}>>;
export declare namespace tdRefControllerFindOne {
    var PATH: string;
}
