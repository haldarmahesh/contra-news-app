import { NewsItemEntity } from "../newsItemEntity";
import { Source } from "../source";

let newsItemEntity = new NewsItemEntity(
  12,
  new Source("33", "source"),
  "Author",
  "title",
  "description",
  "url",
  "urlToImage",
  "publishedAt",
  "content"
);

const newsMockData = {
  newsItemEntityData: newsItemEntity,
};
export default newsMockData;
