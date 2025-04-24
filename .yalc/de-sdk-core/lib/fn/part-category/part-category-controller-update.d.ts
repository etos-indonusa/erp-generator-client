import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartCategoryDto } from '../../models/amims-part-category-dto';
export interface PartCategoryControllerUpdate$Params {
    id: string;
    body: AmimsPartCategoryDto;
}
export declare function partCategoryControllerUpdate(http: HttpClient, rootUrl: string, params: PartCategoryControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartCategoryDto;
}>>;
export declare namespace partCategoryControllerUpdate {
    var PATH: string;
}
