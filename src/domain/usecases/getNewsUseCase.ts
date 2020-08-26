import { NewsItemEntity } from "../entities/newsItemEntity";
import NewsListRespository from "../repository/newsListRepository";

export class NewsUsecase {
  constructor(private newsListRepository: NewsListRespository) {}
  getNewsUseCase(searchQuery: string): Promise<NewsItemEntity[]> {
    return this.newsListRepository.getList(searchQuery);
  }
}
