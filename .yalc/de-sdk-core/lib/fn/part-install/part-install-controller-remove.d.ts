import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallDto } from '../../models/amims-part-install-dto';
export interface PartInstallControllerRemove$Params {
    id: string;
}
export declare function partInstallControllerRemove(http: HttpClient, rootUrl: string, params: PartInstallControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartInstallDto;
}>>;
export declare namespace partInstallControllerRemove {
    var PATH: string;
}
