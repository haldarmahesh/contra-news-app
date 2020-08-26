import React, { useEffect } from "react";
import { StoreState } from "../../../core/redux/store";
import { connect } from "react-redux";
import { getNewsList } from "../../state/news/news.actions";
import { Dispatch } from "redux";
import NewsCardList from "../HomeScreen/newsCardList";
import { useParams } from "react-router-dom";

type IProps = {
  getNewsList: Function;
} & ReturnType<typeof mapStateToProps>;

function SearchResult(props: IProps) {
  //   handleSearch(keyword: string) {
  //     this.props.getNewsList(keyword);
  //   }
  let { id } = useParams();
  useEffect(() => {
    props.getNewsList(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <div className="container">
        <NewsCardList list={props.newsItems} />
      </div>
    </>
  );
}

const mapStateToProps = (state: StoreState) => {
  return {
    newsItems: state.newsItems.newsItems,
    headlines: state.headlines.newsItems,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getNewsList: (searchQuery: string) => getNewsList(dispatch, searchQuery),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
