import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailAcDto } from '../../models/amims-td-detail-ac-dto';
export interface TdDetailAcControllerUpdate$Params {
    id: string;
    body: AmimsTdDetailAcDto;
}
export declare function tdDetailAcControllerUpdate(http: HttpClient, rootUrl: string, params: TdDetailAcControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDetailAcDto;
}>>;
export declare namespace tdDetailAcControllerUpdate {
    var PATH: string;
}
