import React from "react";
import { StoreState } from "../../../core/redux/store";
import { connect } from "react-redux";
import { getNewsList } from "../../state/news/news.actions";
import { getHeadlines } from "../../state/headlines/healines.actions";
import { Dispatch } from "redux";

import NewsCardList from "./newsCardList";

type IProps = {
  getNewsList: Function;
  getHeadlines: Function;
} & ReturnType<typeof mapStateToProps>;

class HomeScreen extends React.Component<IProps> {
  handleSearch(keyword: string) {
    this.props.getNewsList(keyword);
  }
  componentDidMount() {
    this.props.getHeadlines();
  }
  render() {
    return (
      <div className="container">
        <NewsCardList list={this.props.headlines} />
      </div>
    );
  }
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
    getHeadlines: () => getHeadlines(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
