import NewsListRespository from "../../domain/repository/newsListRepository";
import { NewsItemEntity } from "../../domain/entities/newsItemEntity";
import { newsRemoteDatasource } from "../remoteDatasource/newsRemoteDatasource";

export default class NewsListRepositoryImpl implements NewsListRespository {
  async getList(): Promise<NewsItemEntity[]> {
    return newsRemoteDatasource.getList();
  }
}
