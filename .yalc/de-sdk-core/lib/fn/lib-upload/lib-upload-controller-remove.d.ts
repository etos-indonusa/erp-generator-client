import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibUploadDto } from '../../models/amims-lib-upload-dto';
export interface LibUploadControllerRemove$Params {
    id: string;
}
export declare function libUploadControllerRemove(http: HttpClient, rootUrl: string, params: LibUploadControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLibUploadDto;
}>>;
export declare namespace libUploadControllerRemove {
    var PATH: string;
}
