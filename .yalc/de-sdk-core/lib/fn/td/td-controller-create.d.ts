import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDto } from '../../models/amims-td-dto';
export interface TdControllerCreate$Params {
    body: AmimsTdDto;
}
export declare function tdControllerCreate(http: HttpClient, rootUrl: string, params: TdControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDto;
}>>;
export declare namespace tdControllerCreate {
    var PATH: string;
}
