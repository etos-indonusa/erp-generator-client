import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnItemReportDto } from '../../models/amims-engineer-pris-return-item-report-dto';
export interface EngineerPrisReturnItemReportControllerFindOne$Params {
    id: string;
}
export declare function engineerPrisReturnItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPrisReturnItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisReturnItemReportDto;
}>>;
export declare namespace engineerPrisReturnItemReportControllerFindOne {
    var PATH: string;
}
