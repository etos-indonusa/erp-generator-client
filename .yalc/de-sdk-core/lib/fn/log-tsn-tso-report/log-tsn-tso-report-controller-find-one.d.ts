import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogTsnTsoReportDto } from '../../models/amims-log-tsn-tso-report-dto';
export interface LogTsnTsoReportControllerFindOne$Params {
    id: string;
}
export declare function logTsnTsoReportControllerFindOne(http: HttpClient, rootUrl: string, params: LogTsnTsoReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogTsnTsoReportDto;
}>>;
export declare namespace logTsnTsoReportControllerFindOne {
    var PATH: string;
}
