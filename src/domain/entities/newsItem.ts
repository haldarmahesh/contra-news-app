import { Source } from "./source";

export class NewsItem {
  constructor(
    public source: Source,
    public title: string,
    public description: string,
    public url: string,
    public urlToImage: string,
    public publishedAt: string,
    public content: string
  ) {}
}
