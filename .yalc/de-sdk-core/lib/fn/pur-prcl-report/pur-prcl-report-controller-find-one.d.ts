import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrclReportDto } from '../../models/amims-pur-prcl-report-dto';
export interface PurPrclReportControllerFindOne$Params {
    id: string;
}
export declare function purPrclReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurPrclReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrclReportDto;
}>>;
export declare namespace purPrclReportControllerFindOne {
    var PATH: string;
}
