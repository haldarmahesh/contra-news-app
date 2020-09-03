import { newsRemoteDatasource } from "../../remoteDatasource/newsRemoteDatasource";
import newsMockData from "../../../domain/entities/__mock__/newItemEntity.data";
import NewsListRepositoryImpl from "../newListRepositoryImpl";

jest.mock("../../remoteDatasource/newsRemoteDatasource");
describe("NewListRepositoryImpl", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getHeadlines", () => {
    describe("when no excpetion is thrown", () => {
      test("should return NewsItemEntity", async () => {
        (newsRemoteDatasource.getHeadlines as jest.Mock).mockResolvedValueOnce([
          newsMockData.newsItemEntityData,
        ]);
        let newsListRepositoryImpl = new NewsListRepositoryImpl();
        let result = await newsListRepositoryImpl.getHeadlines();
        expect(result[0].author).toEqual(
          newsMockData.newsItemEntityData.author
        );
        expect(newsRemoteDatasource.getHeadlines).toHaveBeenCalledTimes(1);
      });
    });
    describe("when excpetion is thrown", () => {
      test("should throw error", async () => {
        (newsRemoteDatasource.getHeadlines as jest.Mock).mockRejectedValueOnce(
          Error("Http call failed")
        );
        let newsListRepositoryImpl = new NewsListRepositoryImpl();
        try {
          await newsListRepositoryImpl.getHeadlines();
        } catch (err) {
          expect(err.message).toEqual("Http call failed");
          expect(newsRemoteDatasource.getHeadlines).toHaveBeenCalledTimes(1);
        }
      });
    });
  });
  describe("getList", () => {
    describe("when no excpetion is thrown", () => {
      test("should return NewsItemEntity", async () => {
        (newsRemoteDatasource.getList as jest.Mock).mockResolvedValueOnce([
          newsMockData.newsItemEntityData,
        ]);
        let newsListRepositoryImpl = new NewsListRepositoryImpl();
        let result = await newsListRepositoryImpl.getList("query");
        expect(result[0].author).toEqual(
          newsMockData.newsItemEntityData.author
        );
        expect(newsRemoteDatasource.getList).toHaveBeenCalledTimes(1);
      });
    });
    describe("when excpetion is thrown", () => {
      test("should throw error", async () => {
        (newsRemoteDatasource.getList as jest.Mock).mockRejectedValueOnce(
          Error("Http call failed")
        );
        let newsListRepositoryImpl = new NewsListRepositoryImpl();
        try {
          await newsListRepositoryImpl.getList("query");
        } catch (err) {
          expect(err.message).toEqual("Http call failed");
          expect(newsRemoteDatasource.getList).toHaveBeenCalledTimes(1);
        }
      });
    });
  });
});
