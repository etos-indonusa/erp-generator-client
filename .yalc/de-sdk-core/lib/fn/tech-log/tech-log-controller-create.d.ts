import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogDto } from '../../models/amims-tech-log-dto';
export interface TechLogControllerCreate$Params {
    body: AmimsTechLogDto;
}
export declare function techLogControllerCreate(http: HttpClient, rootUrl: string, params: TechLogControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogDto;
}>>;
export declare namespace techLogControllerCreate {
    var PATH: string;
}
