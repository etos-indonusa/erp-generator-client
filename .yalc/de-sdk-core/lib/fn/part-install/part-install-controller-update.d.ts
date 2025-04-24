import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallDto } from '../../models/amims-part-install-dto';
export interface PartInstallControllerUpdate$Params {
    id: string;
    body: AmimsPartInstallDto;
}
export declare function partInstallControllerUpdate(http: HttpClient, rootUrl: string, params: PartInstallControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartInstallDto;
}>>;
export declare namespace partInstallControllerUpdate {
    var PATH: string;
}
