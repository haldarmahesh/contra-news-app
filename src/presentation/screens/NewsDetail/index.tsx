import React, { CSSProperties } from "react";
import { useParams } from "react-router-dom";
import { StoreState } from "../../../core/redux/store";
import { connect } from "react-redux";
import { NewsItemEntity } from "../../../domain/entities/newsItemEntity";
import Header from "../../component/Header";

type IProps = {} & ReturnType<typeof mapStateToProps>;
const cardHeightStyle: CSSProperties = {
  maxHeight: "300px",
};
const coverFitStyle: CSSProperties = {
  objectFit: "cover",
};
function getCurrentNews(
  id: string,
  newList: NewsItemEntity[]
): NewsItemEntity | undefined {
  return newList.find((item) => {
    return item.id === parseInt(id);
  });
}
function NewsDetailScreen(props: IProps) {
  let { id } = useParams();
  console.log(">> data", id, props.newList);
  let currentNews = getCurrentNews(id, props.newList);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm" style={cardHeightStyle}>
            <img
              style={coverFitStyle}
              src={currentNews?.urlToImage}
              className="card-img mh-100"
              alt="..."
            />
          </div>
        </div>
        <div className="jumbotron">
          <div className="container">
            <h2>{currentNews?.title}</h2>
            <h4>
              Author: {currentNews?.author}, {currentNews?.source.name}
            </h4>
            <p>{currentNews?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state: StoreState) => {
  return {
    newList: state.newsItems.newsItems,
  };
};

export default connect(mapStateToProps)(NewsDetailScreen);
