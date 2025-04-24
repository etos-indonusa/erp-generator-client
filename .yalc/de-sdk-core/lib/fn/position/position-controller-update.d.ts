import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPositionDto } from '../../models/amims-position-dto';
export interface PositionControllerUpdate$Params {
    id: string;
    body: AmimsPositionDto;
}
export declare function positionControllerUpdate(http: HttpClient, rootUrl: string, params: PositionControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPositionDto;
}>>;
export declare namespace positionControllerUpdate {
    var PATH: string;
}
