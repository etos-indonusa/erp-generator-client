import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailDto } from '../../models/amims-td-detail-dto';
export interface TdDetailControllerUpdate$Params {
    id: string;
    body: AmimsTdDetailDto;
}
export declare function tdDetailControllerUpdate(http: HttpClient, rootUrl: string, params: TdDetailControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDetailDto;
}>>;
export declare namespace tdDetailControllerUpdate {
    var PATH: string;
}
