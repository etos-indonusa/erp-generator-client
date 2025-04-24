import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartCategoryDto } from '../../models/amims-part-category-dto';
export interface PartCategoryControllerRemove$Params {
    id: string;
}
export declare function partCategoryControllerRemove(http: HttpClient, rootUrl: string, params: PartCategoryControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartCategoryDto;
}>>;
export declare namespace partCategoryControllerRemove {
    var PATH: string;
}
