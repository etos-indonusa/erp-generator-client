import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallOldReportDto } from '../../models/amims-part-install-old-report-dto';
export interface PartInstallOldReportControllerFindOne$Params {
    id: string;
}
export declare function partInstallOldReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartInstallOldReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartInstallOldReportDto;
}>>;
export declare namespace partInstallOldReportControllerFindOne {
    var PATH: string;
}
