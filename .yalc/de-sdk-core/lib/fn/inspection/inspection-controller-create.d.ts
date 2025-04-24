import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInspectionDto } from '../../models/amims-inspection-dto';
export interface InspectionControllerCreate$Params {
    body: AmimsInspectionDto;
}
export declare function inspectionControllerCreate(http: HttpClient, rootUrl: string, params: InspectionControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInspectionDto;
}>>;
export declare namespace inspectionControllerCreate {
    var PATH: string;
}
