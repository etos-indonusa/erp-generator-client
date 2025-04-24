import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailAcDto } from '../../models/amims-td-detail-ac-dto';
export interface TdDetailAcControllerFindOne$Params {
    id: string;
}
export declare function tdDetailAcControllerFindOne(http: HttpClient, rootUrl: string, params: TdDetailAcControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDetailAcDto;
}>>;
export declare namespace tdDetailAcControllerFindOne {
    var PATH: string;
}
