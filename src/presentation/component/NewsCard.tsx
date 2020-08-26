import { FC } from "react";

import React from "react";
import { NewsItemEntity } from "../../domain/entities/newsItemEntity";
type IProps = {
  news: NewsItemEntity;
};
function NewsCard(props: IProps) {
  if (!props.news) {
    return null;
  }
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.news.urlToImage}
        alt="Article news"
      />
      <div className="card-body">
        <h5 className="card-title">{props.news.title}</h5>
        <p className="card-text">{props.news.description}</p>
        <p className="card-text">
          {/* TODO add moment */}
          <small className="text-muted">{props.news.publishedAt}</small>
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
}

export default NewsCard;
