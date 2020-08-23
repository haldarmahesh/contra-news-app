import React from "react";
import { connect } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { getNewsList } from "./state/news/news.actions";
import { StoreState } from "../core/redux/store";
type IProps = {
  getNewsList: Function;
};
function App(props: IProps) {
  return (
    <>
      <HomeScreen />
      <div className="container">
        <button className="btn btn-primary" onClick={() => props.getNewsList()}>
          Get data
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state: StoreState) => {
  console.log(state);
  return {
    newsItems: state.newsItems.newsItems,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getNewsList: () => dispatch(getNewsList),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
