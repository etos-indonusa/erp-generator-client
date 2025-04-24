import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartLogReportDto } from '../../models/amims-part-log-report-dto';
export interface PartLogReportControllerFindOne$Params {
    id: string;
}
export declare function partLogReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartLogReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartLogReportDto;
}>>;
export declare namespace partLogReportControllerFindOne {
    var PATH: string;
}
