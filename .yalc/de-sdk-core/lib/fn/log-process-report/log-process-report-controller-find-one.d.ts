import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogProcessReportDto } from '../../models/amims-log-process-report-dto';
export interface LogProcessReportControllerFindOne$Params {
    id: string;
}
export declare function logProcessReportControllerFindOne(http: HttpClient, rootUrl: string, params: LogProcessReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogProcessReportDto;
}>>;
export declare namespace logProcessReportControllerFindOne {
    var PATH: string;
}
