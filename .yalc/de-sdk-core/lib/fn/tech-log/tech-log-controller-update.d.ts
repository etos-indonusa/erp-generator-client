import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogDto } from '../../models/amims-tech-log-dto';
export interface TechLogControllerUpdate$Params {
    id: string;
    body: AmimsTechLogDto;
}
export declare function techLogControllerUpdate(http: HttpClient, rootUrl: string, params: TechLogControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogDto;
}>>;
export declare namespace techLogControllerUpdate {
    var PATH: string;
}
