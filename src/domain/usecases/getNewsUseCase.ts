import { NewsItemEntity } from "../entities/newsItemEntity";
import NewsListRespository from "../repository/newsListRepository";

export class NewsUsecase {
  constructor(private newsListRepository: NewsListRespository) {}
  getNewsUseCase(): Promise<NewsItemEntity[]> {
    return this.newsListRepository.getList();
  }
}
