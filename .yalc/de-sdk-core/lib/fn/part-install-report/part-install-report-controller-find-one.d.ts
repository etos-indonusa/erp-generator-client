import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallReportDto } from '../../models/amims-part-install-report-dto';
export interface PartInstallReportControllerFindOne$Params {
    id: string;
}
export declare function partInstallReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartInstallReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartInstallReportDto;
}>>;
export declare namespace partInstallReportControllerFindOne {
    var PATH: string;
}
