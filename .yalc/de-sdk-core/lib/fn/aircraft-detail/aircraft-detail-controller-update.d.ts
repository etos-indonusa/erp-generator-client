import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftDetailDto } from '../../models/amims-aircraft-detail-dto';
export interface AircraftDetailControllerUpdate$Params {
    id: string;
    body: AmimsAircraftDetailDto;
}
export declare function aircraftDetailControllerUpdate(http: HttpClient, rootUrl: string, params: AircraftDetailControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAircraftDetailDto;
}>>;
export declare namespace aircraftDetailControllerUpdate {
    var PATH: string;
}
