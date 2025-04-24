import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisItemReportDto } from '../../models/amims-engineer-pris-item-report-dto';
export interface EngineerPrisItemReportControllerFindOne$Params {
    id: string;
}
export declare function engineerPrisItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPrisItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisItemReportDto;
}>>;
export declare namespace engineerPrisItemReportControllerFindOne {
    var PATH: string;
}
