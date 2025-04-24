import { HttpRequest, HttpContext } from '@angular/common/http';
/**
 * Defines the options for appending a parameter
 */
interface ParameterOptions {
    style?: string;
    explode?: boolean;
}
/**
 * Helper to build http requests from parameters
 */
export declare class RequestBuilder {
    rootUrl: string;
    operationPath: string;
    method: string;
    private _path;
    private _query;
    private _header;
    _bodyContent: any | null;
    _bodyContentType?: string;
    constructor(rootUrl: string, operationPath: string, method: string);
    /**
     * Sets a path parameter
     */
    path(name: string, value: any, options?: ParameterOptions): void;
    /**
     * Sets a query parameter
     */
    query(name: string, value: any, options?: ParameterOptions): void;
    /**
     * Sets a header parameter
     */
    header(name: string, value: any, options?: ParameterOptions): void;
    /**
     * Sets the body content, along with the content type
     */
    body(value: any, contentType?: string): void;
    private formDataValue;
    /**
     * Builds the request with the current set parameters
     */
    build<T = any>(options?: {
        /** Which content types to accept */
        accept?: string;
        /** The expected response type */
        responseType?: 'json' | 'text' | 'blob' | 'arraybuffer';
        /** Whether to report progress on uploads / downloads */
        reportProgress?: boolean;
        /** Allow passing HttpContext for HttpClient */
        context?: HttpContext;
    }): HttpRequest<T>;
}
export {};
