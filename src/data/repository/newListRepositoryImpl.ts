import NewsListRespository from "../../domain/repository/newsListRepository";
import { NewsItem } from "../../domain/entities/newsItem";
import { newsRemoteDatasource } from "../remoteDatasource/newsRemoteDatasource";

export default class NewsListRepositoryImpl implements NewsListRespository {
  async getList(): Promise<NewsItem[]> {
    return newsRemoteDatasource.getList();
  }
}
