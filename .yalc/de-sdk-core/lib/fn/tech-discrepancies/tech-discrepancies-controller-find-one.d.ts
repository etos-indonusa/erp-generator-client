import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDiscrepanciesDto } from '../../models/amims-tech-discrepancies-dto';
export interface TechDiscrepanciesControllerFindOne$Params {
    id: string;
}
export declare function techDiscrepanciesControllerFindOne(http: HttpClient, rootUrl: string, params: TechDiscrepanciesControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechDiscrepanciesDto;
}>>;
export declare namespace techDiscrepanciesControllerFindOne {
    var PATH: string;
}
