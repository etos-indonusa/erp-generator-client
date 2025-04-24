import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailDto } from '../../models/amims-td-detail-dto';
export interface TdDetailControllerRemove$Params {
    id: string;
}
export declare function tdDetailControllerRemove(http: HttpClient, rootUrl: string, params: TdDetailControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDetailDto;
}>>;
export declare namespace tdDetailControllerRemove {
    var PATH: string;
}
