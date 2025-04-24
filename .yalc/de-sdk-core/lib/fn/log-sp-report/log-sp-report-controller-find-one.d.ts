import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogSpReportDto } from '../../models/amims-log-sp-report-dto';
export interface LogSpReportControllerFindOne$Params {
    id: string;
}
export declare function logSpReportControllerFindOne(http: HttpClient, rootUrl: string, params: LogSpReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogSpReportDto;
}>>;
export declare namespace logSpReportControllerFindOne {
    var PATH: string;
}
