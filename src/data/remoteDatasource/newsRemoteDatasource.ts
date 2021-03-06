import { NewsItemEntity } from "../../domain/entities/newsItemEntity";
import { contraHttpClient } from "../../core/network/contraHttpClient";
import { Source } from "../../domain/entities/source";
import { AxiosResponse } from "axios";

type DataResponse = {
  status: string;
  totalResults: number;
  articles: NewsItemEntity[];
};
function responseToEntityMapper(response: AxiosResponse): NewsItemEntity[] {
  let initId = 1;
  return response.data.articles.map((item: NewsItemEntity) => {
    if (!item.urlToImage) return null;
    return new NewsItemEntity(
      initId++,
      new Source(item.source.id, item.source.name),
      item.author,
      item.title,
      item.description,
      item.url,
      item.urlToImage,
      item.publishedAt,
      item.content
    );
  });
}
export class NewsRemoteDatasource {
  async getList(searchQuery: string): Promise<NewsItemEntity[]> {
    try {
      let response = await contraHttpClient.get<DataResponse>("/everything", [
        { key: "q", value: searchQuery },
      ]);
      return responseToEntityMapper(response);
    } catch (err) {
      console.log("Caught error while calling /everything API", err);
      throw Error("Http call failed");
    }
  }

  async getHeadlines(): Promise<NewsItemEntity[]> {
    try {
      let response = await contraHttpClient.get<DataResponse>(
        "/top-headlines",
        [{ key: "country", value: "us" }]
      );

      return responseToEntityMapper(response);
    } catch (err) {
      console.log("Caught error while calling /healines API", err);
      throw Error("Http call failed");
    }
  }
}

export const newsRemoteDatasource = new NewsRemoteDatasource();
