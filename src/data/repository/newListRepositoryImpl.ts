import NewsListRespository from "../../domain/repository/newsListRepository";
import { NewsItemEntity } from "../../domain/entities/newsItemEntity";
import { newsRemoteDatasource } from "../remoteDatasource/newsRemoteDatasource";

export default class NewsListRepositoryImpl implements NewsListRespository {
  getHeadlines(): Promise<NewsItemEntity[]> {
    return newsRemoteDatasource.getHeadlines();
  }
  async getList(searchQuery: string): Promise<NewsItemEntity[]> {
    return newsRemoteDatasource.getList(searchQuery);
  }
}
