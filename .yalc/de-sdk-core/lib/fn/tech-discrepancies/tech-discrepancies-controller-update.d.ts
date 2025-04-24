import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDiscrepanciesDto } from '../../models/amims-tech-discrepancies-dto';
export interface TechDiscrepanciesControllerUpdate$Params {
    id: string;
    body: AmimsTechDiscrepanciesDto;
}
export declare function techDiscrepanciesControllerUpdate(http: HttpClient, rootUrl: string, params: TechDiscrepanciesControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechDiscrepanciesDto;
}>>;
export declare namespace techDiscrepanciesControllerUpdate {
    var PATH: string;
}
