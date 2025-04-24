import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogDto } from '../../models/amims-tech-log-dto';
export interface TechLogControllerFindOne$Params {
    id: string;
}
export declare function techLogControllerFindOne(http: HttpClient, rootUrl: string, params: TechLogControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogDto;
}>>;
export declare namespace techLogControllerFindOne {
    var PATH: string;
}
