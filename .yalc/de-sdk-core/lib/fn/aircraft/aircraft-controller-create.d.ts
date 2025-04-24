import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftDto } from '../../models/amims-aircraft-dto';
export interface AircraftControllerCreate$Params {
    body: AmimsAircraftDto;
}
export declare function aircraftControllerCreate(http: HttpClient, rootUrl: string, params: AircraftControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAircraftDto;
}>>;
export declare namespace aircraftControllerCreate {
    var PATH: string;
}
