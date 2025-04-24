import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailAcDto } from '../../models/amims-td-detail-ac-dto';
export interface TdDetailAcControllerRemove$Params {
    id: string;
}
export declare function tdDetailAcControllerRemove(http: HttpClient, rootUrl: string, params: TdDetailAcControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDetailAcDto;
}>>;
export declare namespace tdDetailAcControllerRemove {
    var PATH: string;
}
