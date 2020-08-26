import React from "react";
import { NewsItemEntity } from "../../../domain/entities/newsItemEntity";
import NewsCard from "../../component/NewsCard";

type IProps = {
  list: NewsItemEntity[];
};
function NewsCardList(props: IProps) {
  let listOfCards = props.list.map((item, index) => (
    <NewsCard news={item} key={`${index}`} />
  ));
  return <div className="card-columns">{listOfCards}</div>;
}

export default NewsCardList;
