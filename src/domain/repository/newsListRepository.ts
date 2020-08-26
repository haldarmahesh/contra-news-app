import { NewsItemEntity } from "../entities/newsItemEntity";

export default interface NewsListRespository {
  getList(searchQuery?: string): Promise<NewsItemEntity[]>;
  getHeadlines(): Promise<NewsItemEntity[]>;
}
