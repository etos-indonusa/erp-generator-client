import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdTypeReportDto } from '../../models/amims-td-type-report-dto';
export interface TdTypeReportControllerFindOne$Params {
    id: string;
}
export declare function tdTypeReportControllerFindOne(http: HttpClient, rootUrl: string, params: TdTypeReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdTypeReportDto;
}>>;
export declare namespace tdTypeReportControllerFindOne {
    var PATH: string;
}
