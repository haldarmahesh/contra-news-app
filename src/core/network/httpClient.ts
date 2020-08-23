import axios, { AxiosInstance, AxiosResponse } from "axios";
import config from "../config/config";
export default abstract class HttpClient {
  _defaultTimeout = 3000;
  client: AxiosInstance;
  constructor(public baseUrl: string, public timeout?: number) {
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: timeout || this._defaultTimeout,
    });
  }

  public get<T, R = AxiosResponse<T>>(url: string): Promise<R> {
    return this.client.get(url);
  }

  public post<T, B, R = AxiosResponse<T>>(url: string, data?: B): Promise<R> {
    return this.client.post(url, data);
  }

  public put<T, B, R = AxiosResponse<T>>(url: string, data?: B): Promise<R> {
    return this.client.put(url, data);
  }

  public patch<T, B, R = AxiosResponse<T>>(url: string, data?: B): Promise<R> {
    return this.client.patch(url, data);
  }

  public delete<T, R = AxiosResponse<T>>(url: string): Promise<R> {
    return this.client.delete(url);
  }
}
