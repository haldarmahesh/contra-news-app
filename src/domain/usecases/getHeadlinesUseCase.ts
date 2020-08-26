import NewsListRespository from "../repository/newsListRepository";
import { NewsItemEntity } from "../entities/newsItemEntity";

export class GetHeadlinesUseCase {
  constructor(private newsListRepository: NewsListRespository) {}
  getHeadlines(): Promise<NewsItemEntity[]> {
    return this.newsListRepository.getHeadlines();
  }
}
