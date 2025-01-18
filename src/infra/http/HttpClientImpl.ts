import { HttpClient, HttpRequestConfig } from "./HttpClientTypes";

export class HttpClientImpl implements HttpClient {
    constructor(private httpLibrary: any) {}
  
    async get<T>(url: string, config?: HttpRequestConfig): Promise<T> {
      return this.httpLibrary.get(url, config).then((response: any) => response.data);
    }
  
    async post<T>(url: string, data: any, config?: HttpRequestConfig): Promise<T> {
      return this.httpLibrary.post(url, data, config).then((response: any) => response.data);
    }
  
    async put<T>(url: string, data: any, config?: HttpRequestConfig): Promise<T> {
      return this.httpLibrary.put(url, data, config).then((response: any) => response.data);
    }
  
    async delete<T>(url: string, config?: HttpRequestConfig): Promise<T> {
      return this.httpLibrary.delete(url, config).then((response: any) => response.data);
    }
  }