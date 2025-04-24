import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailReportDto } from '../../models/amims-td-detail-report-dto';
export interface TdDetailReportControllerFindOne$Params {
    id: string;
}
export declare function tdDetailReportControllerFindOne(http: HttpClient, rootUrl: string, params: TdDetailReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDetailReportDto;
}>>;
export declare namespace tdDetailReportControllerFindOne {
    var PATH: string;
}
