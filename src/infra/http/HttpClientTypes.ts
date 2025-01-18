export interface HttpClient {
    get<T>(url: string, config?: HttpRequestConfig): Promise<T>;
    post<T>(url: string, data: any, config?: HttpRequestConfig): Promise<T>;
    put<T>(url: string, data: any, config?: HttpRequestConfig): Promise<T>;
    delete<T>(url: string, config?: HttpRequestConfig): Promise<T>;
 }

export interface HttpRequestConfig {
    headers?: Record<string, string>;
    params?: Record<string, string | number>;
    [key: string]: any;
}

