import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogItemDto } from '../../models/amims-tech-log-item-dto';
export interface TechLogItemControllerCreate$Params {
    body: AmimsTechLogItemDto;
}
export declare function techLogItemControllerCreate(http: HttpClient, rootUrl: string, params: TechLogItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogItemDto;
}>>;
export declare namespace techLogItemControllerCreate {
    var PATH: string;
}
