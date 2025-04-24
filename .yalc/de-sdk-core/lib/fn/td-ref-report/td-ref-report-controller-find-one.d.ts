import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdRefReportDto } from '../../models/amims-td-ref-report-dto';
export interface TdRefReportControllerFindOne$Params {
    id: string;
}
export declare function tdRefReportControllerFindOne(http: HttpClient, rootUrl: string, params: TdRefReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdRefReportDto;
}>>;
export declare namespace tdRefReportControllerFindOne {
    var PATH: string;
}
