import { IQueryParam } from "../network/queryParam";
const JOIN_STRING = "&",
  JOIN_KEY_VALUE = "=";
export function queryParamToStrings(queryParams?: IQueryParam[]): string {
  let query = "";
  if (queryParams) {
    query += queryParams
      .map((item: IQueryParam) => {
        return `${item.key}${JOIN_KEY_VALUE}${item.value}`;
      })
      .join(JOIN_STRING);
  }

  return query;
}
