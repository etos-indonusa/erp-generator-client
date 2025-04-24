import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibUploadDto } from '../../models/amims-lib-upload-dto';
export interface LibUploadControllerUpdate$Params {
    id: string;
    body: AmimsLibUploadDto;
}
export declare function libUploadControllerUpdate(http: HttpClient, rootUrl: string, params: LibUploadControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLibUploadDto;
}>>;
export declare namespace libUploadControllerUpdate {
    var PATH: string;
}
