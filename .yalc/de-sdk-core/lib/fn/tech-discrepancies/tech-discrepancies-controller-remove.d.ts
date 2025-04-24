import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDiscrepanciesDto } from '../../models/amims-tech-discrepancies-dto';
export interface TechDiscrepanciesControllerRemove$Params {
    id: string;
}
export declare function techDiscrepanciesControllerRemove(http: HttpClient, rootUrl: string, params: TechDiscrepanciesControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechDiscrepanciesDto;
}>>;
export declare namespace techDiscrepanciesControllerRemove {
    var PATH: string;
}
