import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReportDto } from '../../models/amims-engineer-pris-report-dto';
export interface EngineerPrisReportControllerFindOne$Params {
    id: string;
}
export declare function engineerPrisReportControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPrisReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisReportDto;
}>>;
export declare namespace engineerPrisReportControllerFindOne {
    var PATH: string;
}
