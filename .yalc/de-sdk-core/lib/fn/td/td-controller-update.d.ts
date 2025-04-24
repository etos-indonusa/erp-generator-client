import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDto } from '../../models/amims-td-dto';
export interface TdControllerUpdate$Params {
    id: string;
    body: AmimsTdDto;
}
export declare function tdControllerUpdate(http: HttpClient, rootUrl: string, params: TdControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDto;
}>>;
export declare namespace tdControllerUpdate {
    var PATH: string;
}
