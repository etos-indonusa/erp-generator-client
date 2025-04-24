import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiPartReportDto } from '../../models/amims-engineer-rti-part-report-dto';
export interface EngineerRtiPartReportControllerFindOne$Params {
    id: string;
}
export declare function engineerRtiPartReportControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerRtiPartReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiPartReportDto;
}>>;
export declare namespace engineerRtiPartReportControllerFindOne {
    var PATH: string;
}
