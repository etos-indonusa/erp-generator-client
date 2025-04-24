import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsBinReportDto } from '../../models/amims-bin-report-dto';
export interface BinReportControllerFindOne$Params {
    id: string;
}
export declare function binReportControllerFindOne(http: HttpClient, rootUrl: string, params: BinReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsBinReportDto;
}>>;
export declare namespace binReportControllerFindOne {
    var PATH: string;
}
