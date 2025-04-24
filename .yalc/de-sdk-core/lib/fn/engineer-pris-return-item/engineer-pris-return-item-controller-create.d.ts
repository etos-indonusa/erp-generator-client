import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnItemDto } from '../../models/amims-engineer-pris-return-item-dto';
export interface EngineerPrisReturnItemControllerCreate$Params {
    body: AmimsEngineerPrisReturnItemDto;
}
export declare function engineerPrisReturnItemControllerCreate(http: HttpClient, rootUrl: string, params: EngineerPrisReturnItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisReturnItemDto;
}>>;
export declare namespace engineerPrisReturnItemControllerCreate {
    var PATH: string;
}
