import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogItemDto } from '../../models/amims-tech-log-item-dto';
export interface TechLogItemControllerRemove$Params {
    id: string;
}
export declare function techLogItemControllerRemove(http: HttpClient, rootUrl: string, params: TechLogItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogItemDto;
}>>;
export declare namespace techLogItemControllerRemove {
    var PATH: string;
}
