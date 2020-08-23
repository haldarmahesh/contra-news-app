import NewsListRepositoryImpl from "../../data/repository/newListRepositoryImpl";
import { NewsItem } from "../entities/newsItem";

export async function getNewsUseCase(): Promise<NewsItem[]> {
  let newsRepositoryList = new NewsListRepositoryImpl();
  return newsRepositoryList.getList();
}
