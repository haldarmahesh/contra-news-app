import { combineReducers } from "redux";

import newsItems from "../../presentation/state/counter/news/news.reducer";

const rootReducer = combineReducers({
  newList: newsItems,
});

export default rootReducer;
