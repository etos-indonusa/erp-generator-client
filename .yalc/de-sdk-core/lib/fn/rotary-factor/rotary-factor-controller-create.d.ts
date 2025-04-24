import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsRotaryFactorDto } from '../../models/amims-rotary-factor-dto';
export interface RotaryFactorControllerCreate$Params {
    body: AmimsRotaryFactorDto;
}
export declare function rotaryFactorControllerCreate(http: HttpClient, rootUrl: string, params: RotaryFactorControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsRotaryFactorDto;
}>>;
export declare namespace rotaryFactorControllerCreate {
    var PATH: string;
}
