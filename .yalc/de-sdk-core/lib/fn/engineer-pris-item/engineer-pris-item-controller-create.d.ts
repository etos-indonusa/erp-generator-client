import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisItemDto } from '../../models/amims-engineer-pris-item-dto';
export interface EngineerPrisItemControllerCreate$Params {
    body: AmimsEngineerPrisItemDto;
}
export declare function engineerPrisItemControllerCreate(http: HttpClient, rootUrl: string, params: EngineerPrisItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisItemDto;
}>>;
export declare namespace engineerPrisItemControllerCreate {
    var PATH: string;
}
