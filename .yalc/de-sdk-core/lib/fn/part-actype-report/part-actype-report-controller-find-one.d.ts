import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartActypeReportDto } from '../../models/amims-part-actype-report-dto';
export interface PartActypeReportControllerFindOne$Params {
    id: string;
}
export declare function partActypeReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartActypeReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartActypeReportDto;
}>>;
export declare namespace partActypeReportControllerFindOne {
    var PATH: string;
}
