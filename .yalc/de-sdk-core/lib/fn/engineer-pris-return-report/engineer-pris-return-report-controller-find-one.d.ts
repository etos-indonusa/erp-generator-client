import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnReportDto } from '../../models/amims-engineer-pris-return-report-dto';
export interface EngineerPrisReturnReportControllerFindOne$Params {
    id: string;
}
export declare function engineerPrisReturnReportControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPrisReturnReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisReturnReportDto;
}>>;
export declare namespace engineerPrisReturnReportControllerFindOne {
    var PATH: string;
}
