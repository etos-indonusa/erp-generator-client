import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPilotReportDto } from '../../models/amims-pilot-report-dto';
export interface PilotReportControllerFindOne$Params {
    id: string;
}
export declare function pilotReportControllerFindOne(http: HttpClient, rootUrl: string, params: PilotReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPilotReportDto;
}>>;
export declare namespace pilotReportControllerFindOne {
    var PATH: string;
}
