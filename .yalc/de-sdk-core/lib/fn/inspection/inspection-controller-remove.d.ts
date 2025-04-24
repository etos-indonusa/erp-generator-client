import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInspectionDto } from '../../models/amims-inspection-dto';
export interface InspectionControllerRemove$Params {
    id: string;
}
export declare function inspectionControllerRemove(http: HttpClient, rootUrl: string, params: InspectionControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInspectionDto;
}>>;
export declare namespace inspectionControllerRemove {
    var PATH: string;
}
