import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsRotaryFactorDto } from '../../models/amims-rotary-factor-dto';
export interface RotaryFactorControllerUpdate$Params {
    id: string;
    body: AmimsRotaryFactorDto;
}
export declare function rotaryFactorControllerUpdate(http: HttpClient, rootUrl: string, params: RotaryFactorControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsRotaryFactorDto;
}>>;
export declare namespace rotaryFactorControllerUpdate {
    var PATH: string;
}
