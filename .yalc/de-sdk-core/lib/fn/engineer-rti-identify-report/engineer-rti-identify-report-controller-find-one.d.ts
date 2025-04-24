import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiIdentifyReportDto } from '../../models/amims-engineer-rti-identify-report-dto';
export interface EngineerRtiIdentifyReportControllerFindOne$Params {
    id: string;
}
export declare function engineerRtiIdentifyReportControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerRtiIdentifyReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiIdentifyReportDto;
}>>;
export declare namespace engineerRtiIdentifyReportControllerFindOne {
    var PATH: string;
}
