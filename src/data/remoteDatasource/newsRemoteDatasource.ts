import { NewsItem } from "../../domain/entities/newsItem";
import { contraHttpClient } from "../../core/network/contraHttpClient";
import { Source } from "../../domain/entities/source";

type DataResponse = {
  status: string;
  totalResults: number;
  articles: NewsItem[];
};

export class NewsRemoteDatasource {
  async getList(): Promise<NewsItem[]> {
    let response = await contraHttpClient.get<DataResponse>("/everything", [
      { key: "q", value: "bitcoin" },
    ]);
    return response.data.articles.map(
      (item: NewsItem) =>
        new NewsItem(
          new Source(item.source.id, item.source.name),
          item.title,
          item.description,
          item.url,
          item.urlToImage,
          item.publishedAt,
          item.content
        )
    );
  }
}

export const newsRemoteDatasource = new NewsRemoteDatasource();
