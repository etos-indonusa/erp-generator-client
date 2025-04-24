import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailDto } from '../../models/amims-td-detail-dto';
export interface TdDetailControllerCreate$Params {
    body: AmimsTdDetailDto;
}
export declare function tdDetailControllerCreate(http: HttpClient, rootUrl: string, params: TdDetailControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDetailDto;
}>>;
export declare namespace tdDetailControllerCreate {
    var PATH: string;
}
