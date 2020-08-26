import { NewsItemEntity } from "../entities/newsItemEntity";

export default interface NewsListRespository {
  getList(): Promise<NewsItemEntity[]>;
}
