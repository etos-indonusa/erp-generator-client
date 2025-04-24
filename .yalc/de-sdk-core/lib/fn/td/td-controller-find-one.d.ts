import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDto } from '../../models/amims-td-dto';
export interface TdControllerFindOne$Params {
    id: string;
}
export declare function tdControllerFindOne(http: HttpClient, rootUrl: string, params: TdControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDto;
}>>;
export declare namespace tdControllerFindOne {
    var PATH: string;
}
