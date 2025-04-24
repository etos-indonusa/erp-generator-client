import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdReportDto } from '../../models/amims-td-report-dto';
export interface TdReportControllerFindOne$Params {
    id: string;
}
export declare function tdReportControllerFindOne(http: HttpClient, rootUrl: string, params: TdReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdReportDto;
}>>;
export declare namespace tdReportControllerFindOne {
    var PATH: string;
}
