import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailAcReportDto } from '../../models/amims-td-detail-ac-report-dto';
export interface TdDetailAcReportControllerFindOne$Params {
    id: string;
}
export declare function tdDetailAcReportControllerFindOne(http: HttpClient, rootUrl: string, params: TdDetailAcReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdDetailAcReportDto;
}>>;
export declare namespace tdDetailAcReportControllerFindOne {
    var PATH: string;
}
