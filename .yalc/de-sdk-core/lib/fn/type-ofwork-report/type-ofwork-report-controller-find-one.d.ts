import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTypeOfworkReportDto } from '../../models/amims-type-ofwork-report-dto';
export interface TypeOfworkReportControllerFindOne$Params {
    id: string;
}
export declare function typeOfworkReportControllerFindOne(http: HttpClient, rootUrl: string, params: TypeOfworkReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTypeOfworkReportDto;
}>>;
export declare namespace typeOfworkReportControllerFindOne {
    var PATH: string;
}
