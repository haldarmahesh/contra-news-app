import NewsListRepositoryImpl from "../../data/repository/newListRepositoryImpl";
import { NewsItem } from "../entities/newsItem";

export class NewsUsecase {
  getNewsUseCase(): Promise<NewsItem[]> {
    let newsRepositoryList = new NewsListRepositoryImpl();
    return newsRepositoryList.getList();
  }
}

export const newsUsecase = new NewsUsecase();
