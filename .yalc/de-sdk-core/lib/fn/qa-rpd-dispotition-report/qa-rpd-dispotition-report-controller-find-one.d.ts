import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdDispotitionReportDto } from '../../models/amims-qa-rpd-dispotition-report-dto';
export interface QaRpdDispotitionReportControllerFindOne$Params {
    id: string;
}
export declare function qaRpdDispotitionReportControllerFindOne(http: HttpClient, rootUrl: string, params: QaRpdDispotitionReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaRpdDispotitionReportDto;
}>>;
export declare namespace qaRpdDispotitionReportControllerFindOne {
    var PATH: string;
}
