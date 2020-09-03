import { queryParamToStrings } from "../stringifyQueryParams";
import { IQueryParam } from "../../network/queryParam";

describe("stringifyQueryParams", () => {
  describe("when input is defined and valid format", () => {
    test("should return query string when one object is passed ", () => {
      let queryParamObject: IQueryParam[] = [
        { key: "query1", value: "value1" },
      ];
      let result = queryParamToStrings(queryParamObject);
      expect(result).toEqual("query1=value1");
    });
    test("should join by & when two object is passed ", () => {
      let queryParamObject: IQueryParam[] = [
        { key: "query1", value: "value1" },
        { key: "query2", value: "value2" },
      ];
      let result = queryParamToStrings(queryParamObject);
      expect(result).toEqual("query1=value1&query2=value2");
    });
  });
  describe("when input is not valid", () => {
    test("should return empty string when input is undefined ", () => {
      let result = queryParamToStrings(undefined);
      expect(result).toEqual("");
    });
  });
});
