import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrItemReportDto } from '../../models/amims-pur-pr-item-report-dto';
export interface PurPrItemReportControllerFindOne$Params {
    id: string;
}
export declare function purPrItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurPrItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrItemReportDto;
}>>;
export declare namespace purPrItemReportControllerFindOne {
    var PATH: string;
}
