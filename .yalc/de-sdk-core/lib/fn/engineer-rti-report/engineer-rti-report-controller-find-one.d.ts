import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiReportDto } from '../../models/amims-engineer-rti-report-dto';
export interface EngineerRtiReportControllerFindOne$Params {
    id: string;
}
export declare function engineerRtiReportControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerRtiReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiReportDto;
}>>;
export declare namespace engineerRtiReportControllerFindOne {
    var PATH: string;
}
