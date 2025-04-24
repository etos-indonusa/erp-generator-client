import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrItemReportDto } from '../../models/amims-engineer-pmtr-item-report-dto';
export interface EngineerPmtrItemReportControllerFindOne$Params {
    id: string;
}
export declare function engineerPmtrItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPmtrItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPmtrItemReportDto;
}>>;
export declare namespace engineerPmtrItemReportControllerFindOne {
    var PATH: string;
}
