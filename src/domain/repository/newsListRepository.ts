import { NewsItem } from "../entities/newsItem";

export default interface NewsListRespository {
  getList(): Promise<NewsItem[]>;
}
