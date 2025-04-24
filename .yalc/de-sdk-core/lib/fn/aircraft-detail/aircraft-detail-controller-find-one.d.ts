import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftDetailDto } from '../../models/amims-aircraft-detail-dto';
export interface AircraftDetailControllerFindOne$Params {
    id: string;
}
export declare function aircraftDetailControllerFindOne(http: HttpClient, rootUrl: string, params: AircraftDetailControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAircraftDetailDto;
}>>;
export declare namespace aircraftDetailControllerFindOne {
    var PATH: string;
}
