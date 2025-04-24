import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPositionReportDto } from '../../models/amims-position-report-dto';
export interface PositionReportControllerFindOne$Params {
    id: string;
}
export declare function positionReportControllerFindOne(http: HttpClient, rootUrl: string, params: PositionReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPositionReportDto;
}>>;
export declare namespace positionReportControllerFindOne {
    var PATH: string;
}
