import { Source } from "./source";

export class NewsItemEntity {
  constructor(
    public id: number,
    public source: Source,
    public author: string,
    public title: string,
    public description: string,
    public url: string,
    public urlToImage: string,
    public publishedAt: string,
    public content: string
  ) {}
}
