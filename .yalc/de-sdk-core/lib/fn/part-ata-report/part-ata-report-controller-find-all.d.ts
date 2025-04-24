import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAtaReportDto } from '../../models/amims-part-ata-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PartAtaReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function partAtaReportControllerFindAll(http: HttpClient, rootUrl: string, params: PartAtaReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartAtaReportDto>;
    'total'?: number;
}>>;
export declare namespace partAtaReportControllerFindAll {
    var PATH: string;
}
