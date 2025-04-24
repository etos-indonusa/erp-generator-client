import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisItemDto } from '../../models/amims-engineer-pris-item-dto';
export interface EngineerPrisItemControllerUpdate$Params {
    id: string;
    body: AmimsEngineerPrisItemDto;
}
export declare function engineerPrisItemControllerUpdate(http: HttpClient, rootUrl: string, params: EngineerPrisItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisItemDto;
}>>;
export declare namespace engineerPrisItemControllerUpdate {
    var PATH: string;
}
