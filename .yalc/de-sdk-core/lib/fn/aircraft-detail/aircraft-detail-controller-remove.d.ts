import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftDetailDto } from '../../models/amims-aircraft-detail-dto';
export interface AircraftDetailControllerRemove$Params {
    id: string;
}
export declare function aircraftDetailControllerRemove(http: HttpClient, rootUrl: string, params: AircraftDetailControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAircraftDetailDto;
}>>;
export declare namespace aircraftDetailControllerRemove {
    var PATH: string;
}
