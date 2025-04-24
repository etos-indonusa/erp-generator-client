import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartCategoryDto } from '../../models/amims-part-category-dto';
export interface PartCategoryControllerCreate$Params {
    body: AmimsPartCategoryDto;
}
export declare function partCategoryControllerCreate(http: HttpClient, rootUrl: string, params: PartCategoryControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartCategoryDto;
}>>;
export declare namespace partCategoryControllerCreate {
    var PATH: string;
}
