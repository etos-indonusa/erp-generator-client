import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcGseReportDto } from '../../models/amims-mpc-gse-report-dto';
export interface MpcGseReportControllerFindOne$Params {
    id: string;
}
export declare function mpcGseReportControllerFindOne(http: HttpClient, rootUrl: string, params: MpcGseReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcGseReportDto;
}>>;
export declare namespace mpcGseReportControllerFindOne {
    var PATH: string;
}
