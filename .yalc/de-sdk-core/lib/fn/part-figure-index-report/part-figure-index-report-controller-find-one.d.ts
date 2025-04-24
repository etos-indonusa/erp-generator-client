import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartFigureIndexReportDto } from '../../models/amims-part-figure-index-report-dto';
export interface PartFigureIndexReportControllerFindOne$Params {
    id: string;
}
export declare function partFigureIndexReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartFigureIndexReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartFigureIndexReportDto;
}>>;
export declare namespace partFigureIndexReportControllerFindOne {
    var PATH: string;
}
