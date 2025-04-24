import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoOperatorReportDto } from '../../models/amims-mpc-jo-operator-report-dto';
export interface MpcJoOperatorReportControllerFindOne$Params {
    id: string;
}
export declare function mpcJoOperatorReportControllerFindOne(http: HttpClient, rootUrl: string, params: MpcJoOperatorReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcJoOperatorReportDto;
}>>;
export declare namespace mpcJoOperatorReportControllerFindOne {
    var PATH: string;
}
