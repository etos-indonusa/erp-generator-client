import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroItemReportDto } from '../../models/amims-mpc-piro-item-report-dto';
export interface MpcPiroItemReportControllerFindOne$Params {
    id: string;
}
export declare function mpcPiroItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: MpcPiroItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcPiroItemReportDto;
}>>;
export declare namespace mpcPiroItemReportControllerFindOne {
    var PATH: string;
}
