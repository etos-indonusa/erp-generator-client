import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogItemDto } from '../../models/amims-tech-log-item-dto';
export interface TechLogItemControllerFindOne$Params {
    id: string;
}
export declare function techLogItemControllerFindOne(http: HttpClient, rootUrl: string, params: TechLogItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogItemDto;
}>>;
export declare namespace techLogItemControllerFindOne {
    var PATH: string;
}
