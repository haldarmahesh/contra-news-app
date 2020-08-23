import HttpClient from "./httpClient";
import config from "../config/config";
import { AxiosResponse } from "axios";
import { IQueryParam } from "./queryParam";
import { queryParamToStrings } from "../utils/stringifyQueryParams";

export class ContraHttpClient extends HttpClient {
  _API_KEY = config.API_KEY;
  _QUERY_START_KEY = "?";
  constructor() {
    super(config.baseURL);
  }

  public get<T, R = AxiosResponse<T>>(
    url: string,
    queryParams?: IQueryParam[]
  ): Promise<R> {
    let queryParamsString = queryParamToStrings(queryParams);
    let apiKeyQuery = this.getAPIKey();
    let joinedQuery = this.joinQueries(queryParamsString, apiKeyQuery);
    return super.get(url + joinedQuery);
  }

  public post<T, B, R = AxiosResponse<T>>(url: string, data?: B): Promise<R> {
    return super.post(url, data);
  }

  public put<T, B, R = AxiosResponse<T>>(url: string, data?: B): Promise<R> {
    return super.put(url, data);
  }

  public patch<T, B, R = AxiosResponse<T>>(url: string, data?: B): Promise<R> {
    return super.patch(url, data);
  }

  public delete<T, R = AxiosResponse<T>>(url: string): Promise<R> {
    return super.delete(url);
  }

  private getAPIKey(): string {
    return `apiKey=${this._API_KEY}`;
  }

  private joinQueries(query1: string, query2: string): string {
    return `${this._QUERY_START_KEY}${
      query1.length > 0 ? query1 + "&" : ""
    }${query2}`;
  }
}

export const contraHttpClient = new ContraHttpClient();
