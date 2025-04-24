import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailDto } from '../../models/amims-td-detail-dto';
export interface TdDetailControllerFindOne$Params {
    id: string;
}
export declare function tdDetailControllerFindOne(http: HttpClient, rootUrl: string, params: TdDetailControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDetailDto;
}>>;
export declare namespace tdDetailControllerFindOne {
    var PATH: string;
}
