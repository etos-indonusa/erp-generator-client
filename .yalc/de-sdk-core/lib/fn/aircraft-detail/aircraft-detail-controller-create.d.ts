import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftDetailDto } from '../../models/amims-aircraft-detail-dto';
export interface AircraftDetailControllerCreate$Params {
    body: AmimsAircraftDetailDto;
}
export declare function aircraftDetailControllerCreate(http: HttpClient, rootUrl: string, params: AircraftDetailControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAircraftDetailDto;
}>>;
export declare namespace aircraftDetailControllerCreate {
    var PATH: string;
}
