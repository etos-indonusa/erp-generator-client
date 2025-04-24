import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogDto } from '../../models/amims-tech-log-dto';
export interface TechLogControllerRemove$Params {
    id: string;
}
export declare function techLogControllerRemove(http: HttpClient, rootUrl: string, params: TechLogControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogDto;
}>>;
export declare namespace techLogControllerRemove {
    var PATH: string;
}
