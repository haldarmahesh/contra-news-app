import { combineReducers } from "redux";

import newsItems from "../../presentation/state/news/news.reducer";

const rootReducer = combineReducers({
  newsItems,
});

export default rootReducer;
