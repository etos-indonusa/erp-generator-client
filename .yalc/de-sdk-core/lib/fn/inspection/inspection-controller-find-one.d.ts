import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInspectionDto } from '../../models/amims-inspection-dto';
export interface InspectionControllerFindOne$Params {
    id: string;
}
export declare function inspectionControllerFindOne(http: HttpClient, rootUrl: string, params: InspectionControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInspectionDto;
}>>;
export declare namespace inspectionControllerFindOne {
    var PATH: string;
}
