import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpartReportDto } from '../../models/amims-mpart-report-dto';
export interface MpartReportControllerFindOne$Params {
    id: string;
}
export declare function mpartReportControllerFindOne(http: HttpClient, rootUrl: string, params: MpartReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpartReportDto;
}>>;
export declare namespace mpartReportControllerFindOne {
    var PATH: string;
}
