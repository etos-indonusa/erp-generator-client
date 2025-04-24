import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroReportDto } from '../../models/amims-mpc-piro-report-dto';
export interface MpcPiroReportControllerFindOne$Params {
    id: string;
}
export declare function mpcPiroReportControllerFindOne(http: HttpClient, rootUrl: string, params: MpcPiroReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcPiroReportDto;
}>>;
export declare namespace mpcPiroReportControllerFindOne {
    var PATH: string;
}
