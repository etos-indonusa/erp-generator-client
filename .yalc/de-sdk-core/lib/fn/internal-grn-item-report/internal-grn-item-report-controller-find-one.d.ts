import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnItemReportDto } from '../../models/amims-internal-grn-item-report-dto';
export interface InternalGrnItemReportControllerFindOne$Params {
    id: string;
}
export declare function internalGrnItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: InternalGrnItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInternalGrnItemReportDto;
}>>;
export declare namespace internalGrnItemReportControllerFindOne {
    var PATH: string;
}
