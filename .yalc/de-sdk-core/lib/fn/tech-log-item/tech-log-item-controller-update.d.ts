import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogItemDto } from '../../models/amims-tech-log-item-dto';
export interface TechLogItemControllerUpdate$Params {
    id: string;
    body: AmimsTechLogItemDto;
}
export declare function techLogItemControllerUpdate(http: HttpClient, rootUrl: string, params: TechLogItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogItemDto;
}>>;
export declare namespace techLogItemControllerUpdate {
    var PATH: string;
}
