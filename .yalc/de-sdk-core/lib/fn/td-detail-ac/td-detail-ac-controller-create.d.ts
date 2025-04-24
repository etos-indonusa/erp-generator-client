import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailAcDto } from '../../models/amims-td-detail-ac-dto';
export interface TdDetailAcControllerCreate$Params {
    body: AmimsTdDetailAcDto;
}
export declare function tdDetailAcControllerCreate(http: HttpClient, rootUrl: string, params: TdDetailAcControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDetailAcDto;
}>>;
export declare namespace tdDetailAcControllerCreate {
    var PATH: string;
}
