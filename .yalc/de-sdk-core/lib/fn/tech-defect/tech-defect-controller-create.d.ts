import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDefectDto } from '../../models/amims-tech-defect-dto';
export interface TechDefectControllerCreate$Params {
    body: AmimsTechDefectDto;
}
export declare function techDefectControllerCreate(http: HttpClient, rootUrl: string, params: TechDefectControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechDefectDto;
}>>;
export declare namespace techDefectControllerCreate {
    var PATH: string;
}
