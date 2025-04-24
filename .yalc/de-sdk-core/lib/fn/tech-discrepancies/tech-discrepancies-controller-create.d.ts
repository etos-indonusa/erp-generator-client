import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDiscrepanciesDto } from '../../models/amims-tech-discrepancies-dto';
export interface TechDiscrepanciesControllerCreate$Params {
    body: AmimsTechDiscrepanciesDto;
}
export declare function techDiscrepanciesControllerCreate(http: HttpClient, rootUrl: string, params: TechDiscrepanciesControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechDiscrepanciesDto;
}>>;
export declare namespace techDiscrepanciesControllerCreate {
    var PATH: string;
}
