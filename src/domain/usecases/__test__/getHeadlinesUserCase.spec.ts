import { GetHeadlinesUseCase } from "../getHeadlinesUseCase";
import NewsListRepositoryImpl from "../../../data/repository/newListRepositoryImpl";
import newsMockData from "../../entities/__mock__/newItemEntity.data";

let newsListRepository: NewsListRepositoryImpl;

jest.mock("../../../data/repository/newListRepositoryImpl");

describe("GetHeadlinesUseCase", () => {
  beforeEach(() => {
    newsListRepository = new NewsListRepositoryImpl();
    jest.resetAllMocks();
  });
  describe("getHeadlines", () => {
    describe("when no excpetion is thrown", () => {
      test("should return the newsItemEntity", async () => {
        (newsListRepository.getHeadlines as jest.Mock).mockResolvedValueOnce([
          newsMockData.newsItemEntityData,
        ]);
        let getHeadlinesUseCase = new GetHeadlinesUseCase(newsListRepository);
        let result = await getHeadlinesUseCase.getHeadlines();
        expect(result[0].author).toEqual(
          newsMockData.newsItemEntityData.author
        );
      });
    });
    describe("when excpetion is thrown", () => {
      test("should return throw error", async () => {
        (newsListRepository.getHeadlines as jest.Mock).mockRejectedValueOnce(
          Error("Http call failed")
        );
        try {
          let getHeadlinesUseCase = new GetHeadlinesUseCase(newsListRepository);
          await getHeadlinesUseCase.getHeadlines();
        } catch (err) {
          expect(err.message).toEqual("Http call failed");
        }
      });
    });
  });
});
