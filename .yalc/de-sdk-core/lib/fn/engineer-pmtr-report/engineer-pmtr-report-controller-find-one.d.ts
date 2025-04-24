import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrReportDto } from '../../models/amims-engineer-pmtr-report-dto';
export interface EngineerPmtrReportControllerFindOne$Params {
    id: string;
}
export declare function engineerPmtrReportControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPmtrReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPmtrReportDto;
}>>;
export declare namespace engineerPmtrReportControllerFindOne {
    var PATH: string;
}
