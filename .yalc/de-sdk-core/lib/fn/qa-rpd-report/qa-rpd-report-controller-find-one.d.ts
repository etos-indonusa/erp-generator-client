import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdReportDto } from '../../models/amims-qa-rpd-report-dto';
export interface QaRpdReportControllerFindOne$Params {
    id: string;
}
export declare function qaRpdReportControllerFindOne(http: HttpClient, rootUrl: string, params: QaRpdReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaRpdReportDto;
}>>;
export declare namespace qaRpdReportControllerFindOne {
    var PATH: string;
}
