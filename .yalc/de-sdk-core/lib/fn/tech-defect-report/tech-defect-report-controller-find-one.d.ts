import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDefectReportDto } from '../../models/amims-tech-defect-report-dto';
export interface TechDefectReportControllerFindOne$Params {
    id: string;
}
export declare function techDefectReportControllerFindOne(http: HttpClient, rootUrl: string, params: TechDefectReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechDefectReportDto;
}>>;
export declare namespace techDefectReportControllerFindOne {
    var PATH: string;
}
