import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAtaReportDto } from '../../models/amims-part-ata-report-dto';
export interface PartAtaReportControllerFindOne$Params {
    id: string;
}
export declare function partAtaReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartAtaReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartAtaReportDto;
}>>;
export declare namespace partAtaReportControllerFindOne {
    var PATH: string;
}
