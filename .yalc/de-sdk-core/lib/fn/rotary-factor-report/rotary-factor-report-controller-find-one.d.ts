import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsRotaryFactorReportDto } from '../../models/amims-rotary-factor-report-dto';
export interface RotaryFactorReportControllerFindOne$Params {
    id: string;
}
export declare function rotaryFactorReportControllerFindOne(http: HttpClient, rootUrl: string, params: RotaryFactorReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsRotaryFactorReportDto;
}>>;
export declare namespace rotaryFactorReportControllerFindOne {
    var PATH: string;
}
