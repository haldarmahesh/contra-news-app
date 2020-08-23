import React from "react";
import { connect } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { getNewsList } from "./state/counter/news/news.actions";

function App(props: any) {
  return (
    <>
      <HomeScreen />
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => props.increaseCounter()}
        >
          Get data
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    newsItems: state.newList.items,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increaseCounter: () => dispatch(getNewsList),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
