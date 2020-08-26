import React from "react";
import Header from "../../component/Header";
import { StoreState } from "../../../core/redux/store";
import { connect } from "react-redux";
import { getNewsList } from "../../state/news/news.actions";
import { Dispatch } from "redux";
import NewsCard from "../../component/NewsCard";

type IProps = {
  getNewsList: Function;
} & ReturnType<typeof mapStateToProps>;

function HomeScreen(props: IProps) {
  return (
    <>
      <Header />
      <div className="container">
        <div>HomePage</div>
        <div className="card-columns">
          <NewsCard news={props.newsItems[0]} />
        </div>
      </div>
      <div className="container">
        <button className="btn btn-primary" onClick={() => props.getNewsList()}>
          Get data
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state: StoreState) => {
  return {
    newsItems: state.newsItems.newsItems,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return { getNewsList: () => getNewsList(dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
