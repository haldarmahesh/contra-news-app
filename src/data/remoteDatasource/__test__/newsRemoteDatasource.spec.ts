import { contraHttpClient } from "../../../core/network/contraHttpClient";
import { newsRemoteDatasource } from "../newsRemoteDatasource";

jest.mock("../../../core/network/contraHttpClient");

describe("NewsRemoteDatasource", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("getList", () => {
    describe("when valid response from API", () => {
      it("should call httpClient get function for the data", async () => {
        (contraHttpClient.get as jest.Mock).mockResolvedValue({
          data: {
            articles: [],
          },
        });

        let news = await newsRemoteDatasource.getList("some");

        expect(contraHttpClient.get).toBeCalledTimes(1);
        expect(news?.length).toBe(0);
      });
      it("should should receive and parse httpClient get function for the data", async () => {
        (contraHttpClient.get as jest.Mock).mockResolvedValue({
          data: {
            articles: [
              {
                title: "Some title",
                source: {},
                urlToImage: "utl",
              },
            ],
          },
        });

        let news = await newsRemoteDatasource.getList("some");
        expect(news).not.toEqual(null);
        expect(contraHttpClient.get).toBeCalledTimes(1);
        if (news != null) {
          expect(news[0].title).toBe("Some title");
          expect(news.length).toBe(1);
        }
      });
    });

    describe("getList, when API throws error", () => {
      it("should throw error when API throws error", async () => {
        (contraHttpClient.get as jest.Mock).mockRejectedValueOnce({
          error: {
            code: "AUTH_ERROR",
          },
        });

        try {
          await newsRemoteDatasource.getList("some");
        } catch (err) {
          expect(err.message).toBe("Http call failed");
        }
      });
    });
  });
});
