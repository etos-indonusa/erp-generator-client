import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoReportDto } from '../../models/amims-mpc-jo-report-dto';
export interface MpcJoReportControllerFindOne$Params {
    id: string;
}
export declare function mpcJoReportControllerFindOne(http: HttpClient, rootUrl: string, params: MpcJoReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcJoReportDto;
}>>;
export declare namespace mpcJoReportControllerFindOne {
    var PATH: string;
}
