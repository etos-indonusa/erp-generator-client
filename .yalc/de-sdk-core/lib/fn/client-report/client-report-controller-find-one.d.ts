import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientReportDto } from '../../models/pelanggan-client-report-dto';
export interface ClientReportControllerFindOne$Params {
    id: string;
}
export declare function clientReportControllerFindOne(http: HttpClient, rootUrl: string, params: ClientReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientReportDto;
}>>;
export declare namespace clientReportControllerFindOne {
    var PATH: string;
}
