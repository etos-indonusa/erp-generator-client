import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcWpReportDto } from '../../models/amims-mpc-wp-report-dto';
export interface MpcWpReportControllerFindOne$Params {
    id: string;
}
export declare function mpcWpReportControllerFindOne(http: HttpClient, rootUrl: string, params: MpcWpReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcWpReportDto;
}>>;
export declare namespace mpcWpReportControllerFindOne {
    var PATH: string;
}
