import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInspectionDto } from '../../models/amims-inspection-dto';
export interface InspectionControllerUpdate$Params {
    id: string;
    body: AmimsInspectionDto;
}
export declare function inspectionControllerUpdate(http: HttpClient, rootUrl: string, params: InspectionControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInspectionDto;
}>>;
export declare namespace inspectionControllerUpdate {
    var PATH: string;
}
