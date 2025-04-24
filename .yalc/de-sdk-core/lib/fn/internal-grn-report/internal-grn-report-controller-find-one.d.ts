import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnReportDto } from '../../models/amims-internal-grn-report-dto';
export interface InternalGrnReportControllerFindOne$Params {
    id: string;
}
export declare function internalGrnReportControllerFindOne(http: HttpClient, rootUrl: string, params: InternalGrnReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInternalGrnReportDto;
}>>;
export declare namespace internalGrnReportControllerFindOne {
    var PATH: string;
}
