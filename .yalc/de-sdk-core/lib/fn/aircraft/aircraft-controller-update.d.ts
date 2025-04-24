import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftDto } from '../../models/amims-aircraft-dto';
export interface AircraftControllerUpdate$Params {
    id: string;
    body: AmimsAircraftDto;
}
export declare function aircraftControllerUpdate(http: HttpClient, rootUrl: string, params: AircraftControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAircraftDto;
}>>;
export declare namespace aircraftControllerUpdate {
    var PATH: string;
}
