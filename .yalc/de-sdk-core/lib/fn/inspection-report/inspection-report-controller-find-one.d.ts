import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInspectionReportDto } from '../../models/amims-inspection-report-dto';
export interface InspectionReportControllerFindOne$Params {
    id: string;
}
export declare function inspectionReportControllerFindOne(http: HttpClient, rootUrl: string, params: InspectionReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInspectionReportDto;
}>>;
export declare namespace inspectionReportControllerFindOne {
    var PATH: string;
}
